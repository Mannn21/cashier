import Icon from "@mdi/react"

const ListNavigation = ({data, pathname}) => {
    return (
        <div className={`w-full flex flex-row gap-2 items-center justify-start p-1 pr-8 text-color-secondary1 hover:text-color-secondary1hover hover:scale-110 transition-all ease-in-out duration-300 ${pathname === data.path ? "text-color-tersier3" : ""}`}>
            <div title={data.title}>
                <Icon path={data.icon} size={1.2} />
            </div>
        </div>
    )
}

export default ListNavigation