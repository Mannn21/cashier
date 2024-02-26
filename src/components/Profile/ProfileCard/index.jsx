import Icon from '@mdi/react';

const ProfileCard = ({data}) => {
    return (
        <div className="w-full h-full bg-color-primer rounded-md shadow-md">
            <div className="w-full h-full p-2 flex flex-col gap-2 justify-start items-center">
                <div className="w-full h-1/3 flex justify-center items-center">
                    <Icon path={data.icon} size={1} />
                </div>
                <div className="w-full h-2/3 flex flex-col gap-1 justify-center items-center">
                    <h3 className="text-base font-medium tracking-wide">{data.title}</h3>
                    <span className="text-lg font-semibold tracking-wide">{data.details}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;