import { Sidebar, Flowbite } from "flowbite-react";
import { FiEdit } from "react-icons/fi";
import { LuStar } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import type { CustomFlowbiteTheme } from "flowbite-react";
import JOPI from '../../../public/JOPI.svg';

const customTheme: CustomFlowbiteTheme = {
    sidebar: {
        root: {
            inner : "bg-[url('../../../public/Bg_Sidebar_SuperAdmin.svg')] h-full overflow-y-auto overflow-x-hidden rounded py-16 gap-10"
        },
        item: {
            base: "flex items-center justify-center py-4 px-5 text-white text-xl cursor-pointer hover:bg-gradient-to-r from-transparent to-[#77688E] hover:border-r-8",
            icon: {
                base: "text-white text-3xl",
            }
        },
        itemGroup: {
            base: "space-y-2"
        }
    },
    textInput: {
        field: {
            rightIcon: {
                base: "cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3 text-black",
                svg: "h-5 w-5 text-black dark:text-gray-400"
            },
            input: {
                base: "lock w-full border-[#95959A] border-2 disabled:cursor-not-allowed disabled:opacity-50",
                colors: {
                    gray: "focus:border-[#2224A1] focus:ring-[#2224A1]"
                }
            },
        }
      },
    checkbox: {
        root: {
            base: "h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700",
            color: {
                default: "text-[#4F1395] focus:ring-[#2224A1] dark:ring-offset-gray-800 dark:focus:ring-[#2224A1]",
            }
        }
    }
  };

export default function SidebarSuperAdmin() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
        <Sidebar aria-label="Default sidebar example" className="border-2 border-black bg-black">
            <Sidebar.Logo className="flex justify-center" href="#" img={JOPI} imgAlt="JOPI logo">
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={IoPersonOutline}>
                        Buat Akun
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={FiEdit}>
                        Buat Planetarium
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={LuStar}>
                        Pilih Planetarium
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    </Flowbite>
  );
}