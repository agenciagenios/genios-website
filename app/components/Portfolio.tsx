"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-32 bg-zinc-900/30">
            <div className="container px-6 mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Trabalhos Recentes</h2>
                    <div className="h-1 w-20 bg-yellow-500 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => {
                        const isVideo = project.images && project.images.length > 0 && (project.images[0].endsWith('.mp4') || project.images[0].endsWith('.webm'));
                        /* eslint-disable-next-line react-hooks/rules-of-hooks */
                        const videoRef = useRef<HTMLVideoElement>(null);

                        const handleMouseEnter = () => {
                            if (isVideo && videoRef.current) {
                                videoRef.current.muted = true;
                                videoRef.current.play().catch(e => console.log('Video play failed', e));
                            }
                        };

                        const handleMouseLeave = () => {
                            if (isVideo && videoRef.current) {
                                videoRef.current.pause();
                                videoRef.current.currentTime = 0;
                            }
                        };

                        return (
                            <Link key={i} href={`/portfolio/${project.id}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* Background Media */}
                                    {project.images && project.images.length > 0 ? (
                                        isVideo ? (
                                            <video
                                                ref={videoRef}
                                                src={project.images[0]}
                                                muted
                                                loop
                                                playsInline
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            /* eslint-disable-next-line @next/next/no-img-element */
                                            <Image
                                                src={project.images[0]}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        )
                                    ) : (
                                        <div className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                                    <div className="absolute bottom-0 left-0 p-8">
                                        <span className="text-yellow-400 text-sm font-medium mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>

                <Link href="/portfolio#">
                    <div className="text-center mt-12">
                        <button className="text-white border-b border-yellow-500 pb-1 hover:text-yellow-400 transition-colors">Ver todos os projetos</button>
                    </div>
                </Link>
            </div>
        </section>
    );
}
