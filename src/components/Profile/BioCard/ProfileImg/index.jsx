import Image from "next/image";

const ProfileImg = () => {
    return (
        <div className="w-full h-full">
            <Image src="https://placehold.jp/180x250.png" alt="profileImage" height={250} width={180}/>
        </div>
    )
}

export default ProfileImg;