import Image from 'next/image'
import imageSobre from '../../../public/001-59.jpg'
export default function Sobre() {
    return (
        <div>
            <main className='bg-[#d6b19f] w-10/12 m-auto relative font-extrabold rounded-b-[3rem] text-[#ebe5da]'>
                <div className='md:flex items-center justify-around pt-10'>
                    <div className="md:w-1/3 pt-2 md:h-[650px] h-[400px] rounded-[8rem]">
                        <Image
                            src={imageSobre}
                            alt="imageSobre"
                            className="object-cover w-full h-full md:rounded-[8rem] rounded-[4rem] "
                        />
                    </div>

                    <div className='md:py-24 py-16 px-4 flex gap-10 flex-col md:text-xl md:w-1/3'>
                        <p>
                            A Neo Family oferece uma ampla gama de serviços odontológicos, desde procedimentos de rotina, como limpezas e exames de rotina, até tratamentos mais avançados, como implantes dentários, ortodontia e estética dental. Os dentistas e especialistas da clínica estão sempre atualizados com as últimas técnicas e tecnologias do campo odontológico, garantindo os melhores resultados para os pacientes.
                        </p>
                        <p>A Neo Family é uma clínica odontológica especializada em cuidar da saúde bucal de toda a família Com uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem, a clínica oferece um ambiente acolhedor e seguro, onde pacientes de todas as idades são atendidos com atenção e cuidado.</p>
                    </div>
                </div>
            </main>

        </div>
    )
}
