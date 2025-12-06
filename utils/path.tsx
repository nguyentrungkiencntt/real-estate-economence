import { icons } from "@/utils/icons"
const { LuLayoutList, FaEyeSlash } = icons;
const { PiNotePencilFill, BiUser, PiBagSimpleLight, CiCircleList, ImStatsDots } = icons;


export const toolNavNotification = [
    {
        id: 0,
        name: 'Tất cả',
    },
    {
        id: 1,
        name: 'Tin đăng',
    },
    {
        id: 2,
        name: 'Tài chính',
    },
    {
        id: 3,
        name: 'Khuyến mãi',
    },
]

export const toolsAlter = [
    {
        id: 0,
        name: 'Tất cả',
        icon: <LuLayoutList size={18} />
    },
    {
        id: 1,
        name: 'Đã ẩn',
        icon: <FaEyeSlash size={18} />
    },
]

export const toolHeaders = [
    {
        id: 0,
        name: "Tổng quan",
        link: '/seller',
        icon: <ImStatsDots size={18} />
    },
    {
        id: 1,
        name: "Tin đăng",
        link: '/seller/posts',
        icon: <CiCircleList size={18} />
    },
    {
        id: 2,
        name: "Đăng tin",
        link: '/seller',
        icon: <PiNotePencilFill size={18} />
    },
    {
        id: 3,
        name: "Môi giới",
        link: '/seller',
        icon: <PiBagSimpleLight size={18} />
    },
    {
        id: 4,
        name: "Tài khoản",
        link: '/seller',
        icon: <BiUser size={18} />
    },

]

export const dataListToolAlterForPost = [
    {
        id: 0,
        name: 'Tất cả',
        count: 0
    },
    {
        id: 1,
        name: 'Hết hạn',
        count: 0
    },
    {
        id: 2,
        name: 'Sắp hết hạn',
        count: 0
    },
    {
        id: 3,
        name: 'Đang hiển thị',
        count: 0
    },
    {
        id: 4,
        name: 'Chờ hiển thị',
        count: 0
    },
    {
        id: 5,
        name: 'Chờ duyệt',
        count: 0
    },
    {
        id: 6,
        name: 'Chờ thanh toán',
        count: 0
    },
    {
        id: 7,
        name: 'Không duyệt',
        count: 0
    },
]