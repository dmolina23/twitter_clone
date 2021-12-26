import Image from "next/image";
import SideBarLink from "./SideBarLink";
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    HomeIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon
} from "@heroicons/react/outline"

function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
                <Image src="https://rb.gy/ogau5a" width={30} height={30} />
            </div>
            <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
                <SideBarLink text="Home" Icon={HomeIcon} active />
                <SideBarLink text="Explore" Icon={HashtagIcon} />
                <SideBarLink text="Notifications" Icon={BellIcon} />
                <SideBarLink text="Messages" Icon={InboxIcon} />
                <SideBarLink text="Bookmarks" Icon={BookmarkIcon} />
                <SideBarLink text="Lists" Icon={ClipboardListIcon} />
                <SideBarLink text="Profile" Icon={UserIcon} />
                <SideBarLink text="More" Icon={DotsCircleHorizontalIcon} />
            </div>
            <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white
            rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]
            ">
                Tweet
            </button>
            <div className="text-[#d9d9d9] flex items-center justify-center 
            mt-auto hoverAnimation xl:ml-auto xl:-mr-5">
                <img src="https://lh3.googleusercontent.com/ogw/
                ADea4I6giwAmjnkX2ec4ZG8gAO1GZEIy6le1c9nEP9zqRA=s32-c-mo"
                    alt=""
                    className="h-10 w-10 rounded-full xl:mr-2.5"
                />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">firebase1875</h4>
                    <p className="text-[#6e767d]">@firebase1875</p>
                </div>
                <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
            </div>
        </div>
    )
}

export default Sidebar