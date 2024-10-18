import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Dice3, Heart, Waves } from "lucide-react";

export const SectionInformation = () => {
    return (

        <div className="grid grid-cols-2 gap-4 justify-center mt-24">
            <Card>
                <CardHeader>
                    <div className="flex items-center">
                        <Dice3 className="size-9 mr-3" />
                        <CardTitle>Metodo Diceware</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="mt-2 text-pretty">
                        Diceware es un método para crear contraseñas fáciles de recordar y seguras mediante el uso de dados.
                        Consiste en generar palabras al azar de una lista predefinida.
                    </p>
                    <p className="mt-2 text-pretty">
                        La idea es que, en lugar de usar combinaciones de caracteres complicadas,
                        se pueden usar varias palabras en una secuencia, formando una frase de contraseña.
                    </p>
                </CardContent>
            </Card>
            <Card >
                <CardHeader>
                    <div className="flex items-center">
                        <Heart className="size-9 mr-3" />
                        <CardTitle>Ventajas de usarlo</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul className="ml-6 list-disc [&>li]:mt-2">
                        <li>
                            Facilidad para recordar: Las contraseñas formadas por palabras son más fáciles de recordar que cadenas aleatorias de caracteres.
                        </li>
                        <li>
                            Seguridad: Al utilizar palabras aleatorias, el número de combinaciones posibles aumenta significativamente, haciendo que la contraseña sea más segura contra ataques de fuerza bruta.
                        </li>
                        <li>
                            Personalización: Puedes personalizar el número de palabras que deseas usar, lo que te permite equilibrar la seguridad y la facilidad de uso.
                        </li>
                    </ul>
                </CardContent>
            </Card>
            <Card className="col-span-2" >
                <CardHeader>
                    <div className="flex items-center">
                        <Waves className="size-9 mr-3" />
                        <CardTitle>Easy Diceware</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-pretty">
                        Easy Diceware es un proyecto creado con el propósito de compartir el método que utilizo
                        para generar mis contraseñas. Para su desarrollo, combiné las tecnologías de <b>ReactJS</b> y <b>Laravel</b> con el fin de crear una interfaz amigable y sencilla, mientras gestiono la complejidad con un marco de trabajo ampliamente probado.
                    </p>
                    <p className="mt-2 text-pretty">
                        Las listas de palabras provienen de fuentes que aseguran
                        mejorar la entropía, lo que resulta en contraseñas más difíciles de descifrar, sin incrementar,
                        en la medida de lo posible, la complejidad de las palabras generadas. Además, puedes organizar
                        las palabras obtenidas de esta página según tus preferencias.
                    </p>
                    <p className="mt-2 text-pretty">
                        El código es completamente libre para adaptaciones, y en la barra superior encontrarás un botón
                        para acceder al repositorio del proyecto.
                    </p>

                </CardContent>
            </Card>
        </div>
    )
}
