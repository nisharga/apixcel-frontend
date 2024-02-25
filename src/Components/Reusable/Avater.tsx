import Image from 'next/image';
import { FC } from 'react';

interface IProps {
    className?: string;
    src: string;
    imageClass: string;    
}

const Avater: FC<IProps> = ({
    className,
    src,
    imageClass, 
}) => {
    return (
        <div className={`${className} flex items-center gap-4`}> 
                <Image
                    src={src}
                    alt='avater'
                    className={imageClass}
                    width={0}
                    height={0}
                    unoptimized
                /> 
        </div>
    );
};

export default Avater;
