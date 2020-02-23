const Fs = require("fs")
const Path = require("path")
const Request = require("request")
const Zip = require("adm-zip")
const Rimraf = require("rimraf")

const ArchivePath = Path.join(__dirname, "feathericons.zip")
const SvgPath = Path.join(__dirname, "svg")
const IconComponentPath = Path.join(__dirname, "Icon.svelte")
const FeatherIconsUrl = "https://github.com/feathericons/feather/archive/master.zip"
const IconDirPath = Path.join(__dirname, "icons")
const ComponentTemplate = `<script>
  export let className, width, height, stroke, strokeWidth, fill
</script>

SVG
`

function abort(e) {
  console.error(e)
  process.exit(1)
}

function download(url) {
  return new Promise((resolve, reject) => {
    let archive = Fs.createWriteStream(ArchivePath)
    console.log("Downloading latest version of Feather Icons from Github...")
    let req = Request({ uri: url })

    req.pipe(archive)

    req.on("finish", () => {
      archive.close()
    })

    req.on("error", (e) => {
      archive.close()
      Fs.unlinkSync(ArchivePath)
      reject(e)
    })

    archive.on("error", (e) => {
      archive.close()
      Fs.unlinkSync(ArchivePath)
      reject(e)
    })

    archive.on("close", () => resolve())

  })
}

function unzip(path) {
  console.log("Extracting archive...")
  let zipUtil = new Zip(path)
  zipUtil.extractEntryTo("feather-master/icons/", SvgPath, false, false)
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.toPascalCase = function() {
  let words = this.split("-")
  let capitalized = words.map((word) => word.capitalize())
  return capitalized.join("")
}

function renderSvg(svg) {
  let newSvg = svg.replace(/width="(\d+)"/, `class={className} width="{width}"`)
  newSvg = newSvg.replace(/height="(\d+)"/, `height="{height}"`)
  newSvg = newSvg.replace(/fill="(\w+)"/, `fill="{fill}"`)
  newSvg = newSvg.replace(/stroke="(\w+)"/, `stroke="{stroke}"`)
  newSvg = newSvg.replace(/stroke-width="(\w+)"/, `stroke-width="{strokeWidth}"`)
  newSvg = newSvg.replace(/\n ?/g, "")
  return newSvg
}

function createComponent(iconSvgFile, iconName) {
  let iconSvgPath = Path.join(SvgPath, iconSvgFile)
  let iconComponentPath = Path.join(IconDirPath, `${iconName}.svelte`)
  let iconComponentFile = Fs.createWriteStream(iconComponentPath)
  let svg = Fs.readFileSync(iconSvgPath).toString()
  let renderedSvg = renderSvg(svg)
  let component = ComponentTemplate.replace("SVG", renderedSvg)
  iconComponentFile.write(component)
  iconComponentFile.close()
}

function cleanup() {
  console.log("Cleaning up...")
  Rimraf.sync(SvgPath)
  Fs.unlinkSync(ArchivePath)
}

function generateComponents() {
  console.log("Generating Svelte components from svg files...")

  if (!Fs.existsSync(IconDirPath)) {
    Fs.mkdirSync(IconDirPath)
  }

  Fs.readdir(SvgPath, (e, files) => {
    if (e) abort(e)

    let iconComponent = Fs.createWriteStream(IconComponentPath)
    let iconName = null

    iconComponent.write(`<script>
  const icons = {}
`)

    files.forEach((file) => {
      iconName = file.split(".")[0].toPascalCase()
      createComponent(file, iconName)
      iconComponent.write(`
  import ${iconName} from "./icons/${iconName}.svelte"
  icons["${iconName}"] = ${iconName}
`)
    })

    iconComponent.write(`
  export let name
  export let className = ""
  export let width = "24"
  export let height = "24"
  export let stroke = "currentColor"
  export let strokeWidth = "2"
  export let fill = "none"
</script>

<svelte:component this={icons[name]} width={width} height={height} stroke={stroke} strokeWidth={strokeWidth} fill={fill} className={className}/>`
    )
    iconComponent.close()
    cleanup()
    console.log("Done.")
  })
}


download(FeatherIconsUrl)
  .then(() => {
    unzip(ArchivePath)
    generateComponents()
  })
  .catch((e) => abort(e))
