<script>
  const icons = {}

  import Activity from "./icons/Activity.svelte"
  icons["Activity"] = Activity

  import Airplay from "./icons/Airplay.svelte"
  icons["Airplay"] = Airplay

  import AlertCircle from "./icons/AlertCircle.svelte"
  icons["AlertCircle"] = AlertCircle

  import AlertOctagon from "./icons/AlertOctagon.svelte"
  icons["AlertOctagon"] = AlertOctagon

  import AlertTriangle from "./icons/AlertTriangle.svelte"
  icons["AlertTriangle"] = AlertTriangle

  import AlignCenter from "./icons/AlignCenter.svelte"
  icons["AlignCenter"] = AlignCenter

  import AlignJustify from "./icons/AlignJustify.svelte"
  icons["AlignJustify"] = AlignJustify

  import AlignLeft from "./icons/AlignLeft.svelte"
  icons["AlignLeft"] = AlignLeft

  import AlignRight from "./icons/AlignRight.svelte"
  icons["AlignRight"] = AlignRight

  import Anchor from "./icons/Anchor.svelte"
  icons["Anchor"] = Anchor

  import Aperture from "./icons/Aperture.svelte"
  icons["Aperture"] = Aperture

  import Archive from "./icons/Archive.svelte"
  icons["Archive"] = Archive

  import ArrowDownCircle from "./icons/ArrowDownCircle.svelte"
  icons["ArrowDownCircle"] = ArrowDownCircle

  import ArrowDownLeft from "./icons/ArrowDownLeft.svelte"
  icons["ArrowDownLeft"] = ArrowDownLeft

  import ArrowDownRight from "./icons/ArrowDownRight.svelte"
  icons["ArrowDownRight"] = ArrowDownRight

  import ArrowDown from "./icons/ArrowDown.svelte"
  icons["ArrowDown"] = ArrowDown

  import ArrowLeftCircle from "./icons/ArrowLeftCircle.svelte"
  icons["ArrowLeftCircle"] = ArrowLeftCircle

  import ArrowLeft from "./icons/ArrowLeft.svelte"
  icons["ArrowLeft"] = ArrowLeft

  import ArrowRightCircle from "./icons/ArrowRightCircle.svelte"
  icons["ArrowRightCircle"] = ArrowRightCircle

  import ArrowRight from "./icons/ArrowRight.svelte"
  icons["ArrowRight"] = ArrowRight

  import ArrowUpCircle from "./icons/ArrowUpCircle.svelte"
  icons["ArrowUpCircle"] = ArrowUpCircle

  import ArrowUpLeft from "./icons/ArrowUpLeft.svelte"
  icons["ArrowUpLeft"] = ArrowUpLeft

  import ArrowUpRight from "./icons/ArrowUpRight.svelte"
  icons["ArrowUpRight"] = ArrowUpRight

  import ArrowUp from "./icons/ArrowUp.svelte"
  icons["ArrowUp"] = ArrowUp

  import AtSign from "./icons/AtSign.svelte"
  icons["AtSign"] = AtSign

  import Award from "./icons/Award.svelte"
  icons["Award"] = Award

  import BarChart2 from "./icons/BarChart2.svelte"
  icons["BarChart2"] = BarChart2

  import BarChart from "./icons/BarChart.svelte"
  icons["BarChart"] = BarChart

  import BatteryCharging from "./icons/BatteryCharging.svelte"
  icons["BatteryCharging"] = BatteryCharging

  import Battery from "./icons/Battery.svelte"
  icons["Battery"] = Battery

  import BellOff from "./icons/BellOff.svelte"
  icons["BellOff"] = BellOff

  import Bell from "./icons/Bell.svelte"
  icons["Bell"] = Bell

  import Bluetooth from "./icons/Bluetooth.svelte"
  icons["Bluetooth"] = Bluetooth

  import Bold from "./icons/Bold.svelte"
  icons["Bold"] = Bold

  import BookOpen from "./icons/BookOpen.svelte"
  icons["BookOpen"] = BookOpen

  import Book from "./icons/Book.svelte"
  icons["Book"] = Book

  import Bookmark from "./icons/Bookmark.svelte"
  icons["Bookmark"] = Bookmark

  import Box from "./icons/Box.svelte"
  icons["Box"] = Box

  import Briefcase from "./icons/Briefcase.svelte"
  icons["Briefcase"] = Briefcase

  import Calendar from "./icons/Calendar.svelte"
  icons["Calendar"] = Calendar

  import CameraOff from "./icons/CameraOff.svelte"
  icons["CameraOff"] = CameraOff

  import Camera from "./icons/Camera.svelte"
  icons["Camera"] = Camera

  import Cast from "./icons/Cast.svelte"
  icons["Cast"] = Cast

  import CheckCircle from "./icons/CheckCircle.svelte"
  icons["CheckCircle"] = CheckCircle

  import CheckSquare from "./icons/CheckSquare.svelte"
  icons["CheckSquare"] = CheckSquare

  import Check from "./icons/Check.svelte"
  icons["Check"] = Check

  import ChevronDown from "./icons/ChevronDown.svelte"
  icons["ChevronDown"] = ChevronDown

  import ChevronLeft from "./icons/ChevronLeft.svelte"
  icons["ChevronLeft"] = ChevronLeft

  import ChevronRight from "./icons/ChevronRight.svelte"
  icons["ChevronRight"] = ChevronRight

  import ChevronUp from "./icons/ChevronUp.svelte"
  icons["ChevronUp"] = ChevronUp

  import ChevronsDown from "./icons/ChevronsDown.svelte"
  icons["ChevronsDown"] = ChevronsDown

  import ChevronsLeft from "./icons/ChevronsLeft.svelte"
  icons["ChevronsLeft"] = ChevronsLeft

  import ChevronsRight from "./icons/ChevronsRight.svelte"
  icons["ChevronsRight"] = ChevronsRight

  import ChevronsUp from "./icons/ChevronsUp.svelte"
  icons["ChevronsUp"] = ChevronsUp

  import Chrome from "./icons/Chrome.svelte"
  icons["Chrome"] = Chrome

  import Circle from "./icons/Circle.svelte"
  icons["Circle"] = Circle

  import Clipboard from "./icons/Clipboard.svelte"
  icons["Clipboard"] = Clipboard

  import Clock from "./icons/Clock.svelte"
  icons["Clock"] = Clock

  import CloudDrizzle from "./icons/CloudDrizzle.svelte"
  icons["CloudDrizzle"] = CloudDrizzle

  import CloudLightning from "./icons/CloudLightning.svelte"
  icons["CloudLightning"] = CloudLightning

  import CloudOff from "./icons/CloudOff.svelte"
  icons["CloudOff"] = CloudOff

  import CloudRain from "./icons/CloudRain.svelte"
  icons["CloudRain"] = CloudRain

  import CloudSnow from "./icons/CloudSnow.svelte"
  icons["CloudSnow"] = CloudSnow

  import Cloud from "./icons/Cloud.svelte"
  icons["Cloud"] = Cloud

  import Code from "./icons/Code.svelte"
  icons["Code"] = Code

  import Codepen from "./icons/Codepen.svelte"
  icons["Codepen"] = Codepen

  import Codesandbox from "./icons/Codesandbox.svelte"
  icons["Codesandbox"] = Codesandbox

  import Coffee from "./icons/Coffee.svelte"
  icons["Coffee"] = Coffee

  import Columns from "./icons/Columns.svelte"
  icons["Columns"] = Columns

  import Command from "./icons/Command.svelte"
  icons["Command"] = Command

  import Compass from "./icons/Compass.svelte"
  icons["Compass"] = Compass

  import Copy from "./icons/Copy.svelte"
  icons["Copy"] = Copy

  import CornerDownLeft from "./icons/CornerDownLeft.svelte"
  icons["CornerDownLeft"] = CornerDownLeft

  import CornerDownRight from "./icons/CornerDownRight.svelte"
  icons["CornerDownRight"] = CornerDownRight

  import CornerLeftDown from "./icons/CornerLeftDown.svelte"
  icons["CornerLeftDown"] = CornerLeftDown

  import CornerLeftUp from "./icons/CornerLeftUp.svelte"
  icons["CornerLeftUp"] = CornerLeftUp

  import CornerRightDown from "./icons/CornerRightDown.svelte"
  icons["CornerRightDown"] = CornerRightDown

  import CornerRightUp from "./icons/CornerRightUp.svelte"
  icons["CornerRightUp"] = CornerRightUp

  import CornerUpLeft from "./icons/CornerUpLeft.svelte"
  icons["CornerUpLeft"] = CornerUpLeft

  import CornerUpRight from "./icons/CornerUpRight.svelte"
  icons["CornerUpRight"] = CornerUpRight

  import Cpu from "./icons/Cpu.svelte"
  icons["Cpu"] = Cpu

  import CreditCard from "./icons/CreditCard.svelte"
  icons["CreditCard"] = CreditCard

  import Crop from "./icons/Crop.svelte"
  icons["Crop"] = Crop

  import Crosshair from "./icons/Crosshair.svelte"
  icons["Crosshair"] = Crosshair

  import Database from "./icons/Database.svelte"
  icons["Database"] = Database

  import Delete from "./icons/Delete.svelte"
  icons["Delete"] = Delete

  import Disc from "./icons/Disc.svelte"
  icons["Disc"] = Disc

  import DollarSign from "./icons/DollarSign.svelte"
  icons["DollarSign"] = DollarSign

  import DownloadCloud from "./icons/DownloadCloud.svelte"
  icons["DownloadCloud"] = DownloadCloud

  import Download from "./icons/Download.svelte"
  icons["Download"] = Download

  import Droplet from "./icons/Droplet.svelte"
  icons["Droplet"] = Droplet

  import Edit2 from "./icons/Edit2.svelte"
  icons["Edit2"] = Edit2

  import Edit3 from "./icons/Edit3.svelte"
  icons["Edit3"] = Edit3

  import Edit from "./icons/Edit.svelte"
  icons["Edit"] = Edit

  import ExternalLink from "./icons/ExternalLink.svelte"
  icons["ExternalLink"] = ExternalLink

  import EyeOff from "./icons/EyeOff.svelte"
  icons["EyeOff"] = EyeOff

  import Eye from "./icons/Eye.svelte"
  icons["Eye"] = Eye

  import Facebook from "./icons/Facebook.svelte"
  icons["Facebook"] = Facebook

  import FastForward from "./icons/FastForward.svelte"
  icons["FastForward"] = FastForward

  import Feather from "./icons/Feather.svelte"
  icons["Feather"] = Feather

  import Figma from "./icons/Figma.svelte"
  icons["Figma"] = Figma

  import FileMinus from "./icons/FileMinus.svelte"
  icons["FileMinus"] = FileMinus

  import FilePlus from "./icons/FilePlus.svelte"
  icons["FilePlus"] = FilePlus

  import FileText from "./icons/FileText.svelte"
  icons["FileText"] = FileText

  import File from "./icons/File.svelte"
  icons["File"] = File

  import Film from "./icons/Film.svelte"
  icons["Film"] = Film

  import Filter from "./icons/Filter.svelte"
  icons["Filter"] = Filter

  import Flag from "./icons/Flag.svelte"
  icons["Flag"] = Flag

  import FolderMinus from "./icons/FolderMinus.svelte"
  icons["FolderMinus"] = FolderMinus

  import FolderPlus from "./icons/FolderPlus.svelte"
  icons["FolderPlus"] = FolderPlus

  import Folder from "./icons/Folder.svelte"
  icons["Folder"] = Folder

  import Framer from "./icons/Framer.svelte"
  icons["Framer"] = Framer

  import Frown from "./icons/Frown.svelte"
  icons["Frown"] = Frown

  import Gift from "./icons/Gift.svelte"
  icons["Gift"] = Gift

  import GitBranch from "./icons/GitBranch.svelte"
  icons["GitBranch"] = GitBranch

  import GitCommit from "./icons/GitCommit.svelte"
  icons["GitCommit"] = GitCommit

  import GitMerge from "./icons/GitMerge.svelte"
  icons["GitMerge"] = GitMerge

  import GitPullRequest from "./icons/GitPullRequest.svelte"
  icons["GitPullRequest"] = GitPullRequest

  import Github from "./icons/Github.svelte"
  icons["Github"] = Github

  import Gitlab from "./icons/Gitlab.svelte"
  icons["Gitlab"] = Gitlab

  import Globe from "./icons/Globe.svelte"
  icons["Globe"] = Globe

  import Grid from "./icons/Grid.svelte"
  icons["Grid"] = Grid

  import HardDrive from "./icons/HardDrive.svelte"
  icons["HardDrive"] = HardDrive

  import Hash from "./icons/Hash.svelte"
  icons["Hash"] = Hash

  import Headphones from "./icons/Headphones.svelte"
  icons["Headphones"] = Headphones

  import Heart from "./icons/Heart.svelte"
  icons["Heart"] = Heart

  import HelpCircle from "./icons/HelpCircle.svelte"
  icons["HelpCircle"] = HelpCircle

  import Hexagon from "./icons/Hexagon.svelte"
  icons["Hexagon"] = Hexagon

  import Home from "./icons/Home.svelte"
  icons["Home"] = Home

  import Image from "./icons/Image.svelte"
  icons["Image"] = Image

  import Inbox from "./icons/Inbox.svelte"
  icons["Inbox"] = Inbox

  import Info from "./icons/Info.svelte"
  icons["Info"] = Info

  import Instagram from "./icons/Instagram.svelte"
  icons["Instagram"] = Instagram

  import Italic from "./icons/Italic.svelte"
  icons["Italic"] = Italic

  import Key from "./icons/Key.svelte"
  icons["Key"] = Key

  import Layers from "./icons/Layers.svelte"
  icons["Layers"] = Layers

  import Layout from "./icons/Layout.svelte"
  icons["Layout"] = Layout

  import LifeBuoy from "./icons/LifeBuoy.svelte"
  icons["LifeBuoy"] = LifeBuoy

  import Link2 from "./icons/Link2.svelte"
  icons["Link2"] = Link2

  import Link from "./icons/Link.svelte"
  icons["Link"] = Link

  import Linkedin from "./icons/Linkedin.svelte"
  icons["Linkedin"] = Linkedin

  import List from "./icons/List.svelte"
  icons["List"] = List

  import Loader from "./icons/Loader.svelte"
  icons["Loader"] = Loader

  import Lock from "./icons/Lock.svelte"
  icons["Lock"] = Lock

  import LogIn from "./icons/LogIn.svelte"
  icons["LogIn"] = LogIn

  import LogOut from "./icons/LogOut.svelte"
  icons["LogOut"] = LogOut

  import Mail from "./icons/Mail.svelte"
  icons["Mail"] = Mail

  import MapPin from "./icons/MapPin.svelte"
  icons["MapPin"] = MapPin

  import Map from "./icons/Map.svelte"
  icons["Map"] = Map

  import Maximize2 from "./icons/Maximize2.svelte"
  icons["Maximize2"] = Maximize2

  import Maximize from "./icons/Maximize.svelte"
  icons["Maximize"] = Maximize

  import Meh from "./icons/Meh.svelte"
  icons["Meh"] = Meh

  import Menu from "./icons/Menu.svelte"
  icons["Menu"] = Menu

  import MessageCircle from "./icons/MessageCircle.svelte"
  icons["MessageCircle"] = MessageCircle

  import MessageSquare from "./icons/MessageSquare.svelte"
  icons["MessageSquare"] = MessageSquare

  import MicOff from "./icons/MicOff.svelte"
  icons["MicOff"] = MicOff

  import Mic from "./icons/Mic.svelte"
  icons["Mic"] = Mic

  import Minimize2 from "./icons/Minimize2.svelte"
  icons["Minimize2"] = Minimize2

  import Minimize from "./icons/Minimize.svelte"
  icons["Minimize"] = Minimize

  import MinusCircle from "./icons/MinusCircle.svelte"
  icons["MinusCircle"] = MinusCircle

  import MinusSquare from "./icons/MinusSquare.svelte"
  icons["MinusSquare"] = MinusSquare

  import Minus from "./icons/Minus.svelte"
  icons["Minus"] = Minus

  import Monitor from "./icons/Monitor.svelte"
  icons["Monitor"] = Monitor

  import Moon from "./icons/Moon.svelte"
  icons["Moon"] = Moon

  import MoreHorizontal from "./icons/MoreHorizontal.svelte"
  icons["MoreHorizontal"] = MoreHorizontal

  import MoreVertical from "./icons/MoreVertical.svelte"
  icons["MoreVertical"] = MoreVertical

  import MousePointer from "./icons/MousePointer.svelte"
  icons["MousePointer"] = MousePointer

  import Move from "./icons/Move.svelte"
  icons["Move"] = Move

  import Music from "./icons/Music.svelte"
  icons["Music"] = Music

  import Navigation2 from "./icons/Navigation2.svelte"
  icons["Navigation2"] = Navigation2

  import Navigation from "./icons/Navigation.svelte"
  icons["Navigation"] = Navigation

  import Octagon from "./icons/Octagon.svelte"
  icons["Octagon"] = Octagon

  import Package from "./icons/Package.svelte"
  icons["Package"] = Package

  import Paperclip from "./icons/Paperclip.svelte"
  icons["Paperclip"] = Paperclip

  import PauseCircle from "./icons/PauseCircle.svelte"
  icons["PauseCircle"] = PauseCircle

  import Pause from "./icons/Pause.svelte"
  icons["Pause"] = Pause

  import PenTool from "./icons/PenTool.svelte"
  icons["PenTool"] = PenTool

  import Percent from "./icons/Percent.svelte"
  icons["Percent"] = Percent

  import PhoneCall from "./icons/PhoneCall.svelte"
  icons["PhoneCall"] = PhoneCall

  import PhoneForwarded from "./icons/PhoneForwarded.svelte"
  icons["PhoneForwarded"] = PhoneForwarded

  import PhoneIncoming from "./icons/PhoneIncoming.svelte"
  icons["PhoneIncoming"] = PhoneIncoming

  import PhoneMissed from "./icons/PhoneMissed.svelte"
  icons["PhoneMissed"] = PhoneMissed

  import PhoneOff from "./icons/PhoneOff.svelte"
  icons["PhoneOff"] = PhoneOff

  import PhoneOutgoing from "./icons/PhoneOutgoing.svelte"
  icons["PhoneOutgoing"] = PhoneOutgoing

  import Phone from "./icons/Phone.svelte"
  icons["Phone"] = Phone

  import PieChart from "./icons/PieChart.svelte"
  icons["PieChart"] = PieChart

  import PlayCircle from "./icons/PlayCircle.svelte"
  icons["PlayCircle"] = PlayCircle

  import Play from "./icons/Play.svelte"
  icons["Play"] = Play

  import PlusCircle from "./icons/PlusCircle.svelte"
  icons["PlusCircle"] = PlusCircle

  import PlusSquare from "./icons/PlusSquare.svelte"
  icons["PlusSquare"] = PlusSquare

  import Plus from "./icons/Plus.svelte"
  icons["Plus"] = Plus

  import Pocket from "./icons/Pocket.svelte"
  icons["Pocket"] = Pocket

  import Power from "./icons/Power.svelte"
  icons["Power"] = Power

  import Printer from "./icons/Printer.svelte"
  icons["Printer"] = Printer

  import Radio from "./icons/Radio.svelte"
  icons["Radio"] = Radio

  import RefreshCcw from "./icons/RefreshCcw.svelte"
  icons["RefreshCcw"] = RefreshCcw

  import RefreshCw from "./icons/RefreshCw.svelte"
  icons["RefreshCw"] = RefreshCw

  import Repeat from "./icons/Repeat.svelte"
  icons["Repeat"] = Repeat

  import Rewind from "./icons/Rewind.svelte"
  icons["Rewind"] = Rewind

  import RotateCcw from "./icons/RotateCcw.svelte"
  icons["RotateCcw"] = RotateCcw

  import RotateCw from "./icons/RotateCw.svelte"
  icons["RotateCw"] = RotateCw

  import Rss from "./icons/Rss.svelte"
  icons["Rss"] = Rss

  import Save from "./icons/Save.svelte"
  icons["Save"] = Save

  import Scissors from "./icons/Scissors.svelte"
  icons["Scissors"] = Scissors

  import Search from "./icons/Search.svelte"
  icons["Search"] = Search

  import Send from "./icons/Send.svelte"
  icons["Send"] = Send

  import Server from "./icons/Server.svelte"
  icons["Server"] = Server

  import Settings from "./icons/Settings.svelte"
  icons["Settings"] = Settings

  import Share2 from "./icons/Share2.svelte"
  icons["Share2"] = Share2

  import Share from "./icons/Share.svelte"
  icons["Share"] = Share

  import ShieldOff from "./icons/ShieldOff.svelte"
  icons["ShieldOff"] = ShieldOff

  import Shield from "./icons/Shield.svelte"
  icons["Shield"] = Shield

  import ShoppingBag from "./icons/ShoppingBag.svelte"
  icons["ShoppingBag"] = ShoppingBag

  import ShoppingCart from "./icons/ShoppingCart.svelte"
  icons["ShoppingCart"] = ShoppingCart

  import Shuffle from "./icons/Shuffle.svelte"
  icons["Shuffle"] = Shuffle

  import Sidebar from "./icons/Sidebar.svelte"
  icons["Sidebar"] = Sidebar

  import SkipBack from "./icons/SkipBack.svelte"
  icons["SkipBack"] = SkipBack

  import SkipForward from "./icons/SkipForward.svelte"
  icons["SkipForward"] = SkipForward

  import Slack from "./icons/Slack.svelte"
  icons["Slack"] = Slack

  import Slash from "./icons/Slash.svelte"
  icons["Slash"] = Slash

  import Sliders from "./icons/Sliders.svelte"
  icons["Sliders"] = Sliders

  import Smartphone from "./icons/Smartphone.svelte"
  icons["Smartphone"] = Smartphone

  import Smile from "./icons/Smile.svelte"
  icons["Smile"] = Smile

  import Speaker from "./icons/Speaker.svelte"
  icons["Speaker"] = Speaker

  import Square from "./icons/Square.svelte"
  icons["Square"] = Square

  import Star from "./icons/Star.svelte"
  icons["Star"] = Star

  import StopCircle from "./icons/StopCircle.svelte"
  icons["StopCircle"] = StopCircle

  import Sun from "./icons/Sun.svelte"
  icons["Sun"] = Sun

  import Sunrise from "./icons/Sunrise.svelte"
  icons["Sunrise"] = Sunrise

  import Sunset from "./icons/Sunset.svelte"
  icons["Sunset"] = Sunset

  import Tablet from "./icons/Tablet.svelte"
  icons["Tablet"] = Tablet

  import Tag from "./icons/Tag.svelte"
  icons["Tag"] = Tag

  import Target from "./icons/Target.svelte"
  icons["Target"] = Target

  import Terminal from "./icons/Terminal.svelte"
  icons["Terminal"] = Terminal

  import Thermometer from "./icons/Thermometer.svelte"
  icons["Thermometer"] = Thermometer

  import ThumbsDown from "./icons/ThumbsDown.svelte"
  icons["ThumbsDown"] = ThumbsDown

  import ThumbsUp from "./icons/ThumbsUp.svelte"
  icons["ThumbsUp"] = ThumbsUp

  import ToggleLeft from "./icons/ToggleLeft.svelte"
  icons["ToggleLeft"] = ToggleLeft

  import ToggleRight from "./icons/ToggleRight.svelte"
  icons["ToggleRight"] = ToggleRight

  import Tool from "./icons/Tool.svelte"
  icons["Tool"] = Tool

  import Trash2 from "./icons/Trash2.svelte"
  icons["Trash2"] = Trash2

  import Trash from "./icons/Trash.svelte"
  icons["Trash"] = Trash

  import Trello from "./icons/Trello.svelte"
  icons["Trello"] = Trello

  import TrendingDown from "./icons/TrendingDown.svelte"
  icons["TrendingDown"] = TrendingDown

  import TrendingUp from "./icons/TrendingUp.svelte"
  icons["TrendingUp"] = TrendingUp

  import Triangle from "./icons/Triangle.svelte"
  icons["Triangle"] = Triangle

  import Truck from "./icons/Truck.svelte"
  icons["Truck"] = Truck

  import Tv from "./icons/Tv.svelte"
  icons["Tv"] = Tv

  import Twitch from "./icons/Twitch.svelte"
  icons["Twitch"] = Twitch

  import Twitter from "./icons/Twitter.svelte"
  icons["Twitter"] = Twitter

  import Type from "./icons/Type.svelte"
  icons["Type"] = Type

  import Umbrella from "./icons/Umbrella.svelte"
  icons["Umbrella"] = Umbrella

  import Underline from "./icons/Underline.svelte"
  icons["Underline"] = Underline

  import Unlock from "./icons/Unlock.svelte"
  icons["Unlock"] = Unlock

  import UploadCloud from "./icons/UploadCloud.svelte"
  icons["UploadCloud"] = UploadCloud

  import Upload from "./icons/Upload.svelte"
  icons["Upload"] = Upload

  import UserCheck from "./icons/UserCheck.svelte"
  icons["UserCheck"] = UserCheck

  import UserMinus from "./icons/UserMinus.svelte"
  icons["UserMinus"] = UserMinus

  import UserPlus from "./icons/UserPlus.svelte"
  icons["UserPlus"] = UserPlus

  import UserX from "./icons/UserX.svelte"
  icons["UserX"] = UserX

  import User from "./icons/User.svelte"
  icons["User"] = User

  import Users from "./icons/Users.svelte"
  icons["Users"] = Users

  import VideoOff from "./icons/VideoOff.svelte"
  icons["VideoOff"] = VideoOff

  import Video from "./icons/Video.svelte"
  icons["Video"] = Video

  import Voicemail from "./icons/Voicemail.svelte"
  icons["Voicemail"] = Voicemail

  import Volume1 from "./icons/Volume1.svelte"
  icons["Volume1"] = Volume1

  import Volume2 from "./icons/Volume2.svelte"
  icons["Volume2"] = Volume2

  import VolumeX from "./icons/VolumeX.svelte"
  icons["VolumeX"] = VolumeX

  import Volume from "./icons/Volume.svelte"
  icons["Volume"] = Volume

  import Watch from "./icons/Watch.svelte"
  icons["Watch"] = Watch

  import WifiOff from "./icons/WifiOff.svelte"
  icons["WifiOff"] = WifiOff

  import Wifi from "./icons/Wifi.svelte"
  icons["Wifi"] = Wifi

  import Wind from "./icons/Wind.svelte"
  icons["Wind"] = Wind

  import XCircle from "./icons/XCircle.svelte"
  icons["XCircle"] = XCircle

  import XOctagon from "./icons/XOctagon.svelte"
  icons["XOctagon"] = XOctagon

  import XSquare from "./icons/XSquare.svelte"
  icons["XSquare"] = XSquare

  import X from "./icons/X.svelte"
  icons["X"] = X

  import Youtube from "./icons/Youtube.svelte"
  icons["Youtube"] = Youtube

  import ZapOff from "./icons/ZapOff.svelte"
  icons["ZapOff"] = ZapOff

  import Zap from "./icons/Zap.svelte"
  icons["Zap"] = Zap

  import ZoomIn from "./icons/ZoomIn.svelte"
  icons["ZoomIn"] = ZoomIn

  import ZoomOut from "./icons/ZoomOut.svelte"
  icons["ZoomOut"] = ZoomOut

  export let name
  export let className = ""
  export let width = "24"
  export let height = "24"
  export let stroke = "currentColor"
  export let strokeWidth = "2"
  export let fill = "none"
</script>

<svelte:component this={icons[name]} width={width} height={height} stroke={stroke} strokeWidth={strokeWidth} fill={fill} className={className}/>