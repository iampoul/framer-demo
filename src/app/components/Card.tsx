import { HTMLMotionProps, motion } from 'framer-motion'
import Image from 'next/image'

const Card = ({
    title,
    subtitle,
    id,
    price,
    image_url,
    ...props
}: {
    title: string
    subtitle: string
    id: string
    price: string
    image_url: string
} & HTMLMotionProps<'div'>) => {
    return (
        <motion.div layout key={id} {...props}>
            <Image
                src={image_url}
                alt={''}
                width={400}
                height={400}
                className="rounded-md"
            />
            <div className="flex flex-col justify-between">
                <motion.h2 className="font-semibold text-xl py-2">
                    {title}
                </motion.h2>
                <motion.h5>{subtitle}</motion.h5>
                <motion.h5 className="font-semibold text-xl py-2">
                    {price} DKK
                </motion.h5>
            </div>
        </motion.div>
    )
}

export default Card
