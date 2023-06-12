'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Card from '@/app/components/Card'
import getProductsFromFakeApi from '@/app/lib/getProductsFromFakeApi'

const Products = () => {
    const [item, setItem] = useState<{
        id: string
        title: string
        subtitle: string
        price: string
        image_url: string
    } | null>(null)

    const [visible, setVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log(visible)
    }, [visible])

    return (
        <>
            <motion.div
                ref={ref}
                className="fixed top-0 left-1/2 -translate-x-1/2 mt-10 mr-10 bg-black text-white p-5 rounded-md shadow-2xl shadow-pink-500/50 border-pink-400"
                initial={{ opacity: 0 }}
                animate={visible ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                    type: 'ease',
                    ease: 'easeInOut',
                    duration: 0.5,
                }}
                exit={{
                    opacity: 0,
                }}
                onAnimationComplete={() => {
                    setTimeout(() => {
                        setVisible(false)
                    }, 1000)
                }}
            >
                <h1 className="text-2xl font-semibold">
                    {item?.title} added to cart
                </h1>
            </motion.div>

            <motion.div
                className={`mt-20 border p-10 w-1/2 rounded-md shadow-2xl relative ${
                    item
                        ? 'shadow-blue-500/50 border-blue-400'
                        : 'shadow-pink-500/50 border-pink-400'
                }`}
                transition={{
                    color: {
                        type: 'spring',
                    },
                }}
                layout
            >
                <div className="flex flex-row gap-5">
                    {getProductsFromFakeApi().map((item) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            price={item.price}
                            id={item.id}
                            image_url={item.image_url}
                            onClick={() => {
                                setItem(item)
                            }}
                            className="cursor-pointer w-1/3"
                        />
                    ))}
                </div>

                {item && (
                    <motion.div
                        className="text-white bg-black rounded-xl text-2xl p-12 shadow-2xl shadow-blue-500/50 border-blue-400 mt-10 flex flex-col gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: 'ease',
                            ease: 'easeInOut',
                            duration: 0.5,
                        }}
                    >
                        <h2>{item.title}</h2>
                        <h5>{item.subtitle}</h5>
                        <div>
                            <button
                                onClick={() => setVisible(true)}
                                className="px-4 py-2 rounded-xl bg-gradient-to-br to-blue-500 from-blue-300 mr-2 mt-2"
                            >
                                BUY NOW
                            </button>
                            <button
                                onClick={() => setItem(null)}
                                className="px-4 py-2 rounded-xl bg-gradient-to-br to-pink-500 from-pink-300"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </>
    )
}

export default Products
