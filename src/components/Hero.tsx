import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useTranslation } from '../lib/i18n';

export default function Hero() {
    const { t } = useTranslation();
    return (
        <section className="relative h-screen" id="home">
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <OrbitControls enableZoom={false} autoRotate />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 200]} scale={2.4}>
                        <MeshDistortMaterial
                            color="#00BFFF"
                            attach="material"
                            distort={0.5}
                            speed={2}
                            transparent={true}
                            opacity={0.3}
                        />
                    </Sphere>
                </Canvas>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                    {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-green mb-8">
                    {t('hero.subtitle')}
                </p>
                <a
                    href="#services"
                    className="bg-green text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-blue transition-colors inline-block"
                >
                    {t('hero.cta')}
                </a>
            </div>
        </section>
    );
} 