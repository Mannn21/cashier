import Icon from '@mdi/react';
import { mdiPackageVariantRemove } from '@mdi/js';

const EmptyMenus = () => {
    return (
        <div className="w-full h-full p-2">
            <div className="w-full h-full flex flex-col justify-center items-center gap-3 text-color-tersier3">
                <Icon path={mdiPackageVariantRemove} size={6} />
                <span className="text-xl font-semibold tracking-wide">Menu tidak tersedia</span>
            </div>
        </div>
    )
}

export default EmptyMenus;