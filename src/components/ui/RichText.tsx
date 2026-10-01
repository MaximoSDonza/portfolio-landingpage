// Renderiza un texto de la data resaltando lo que esté entre **dobles asteriscos**.
const RichText = ({ texto }: { texto: string }) => (
  <>
    {texto.split(/(\*\*[^*]+\*\*)/g).map((parte, i) =>
      parte.startsWith('**') && parte.endsWith('**') ? (
        <strong key={i} className="font-medium text-neutral-200">
          {parte.slice(2, -2)}
        </strong>
      ) : (
        parte
      ),
    )}
  </>
)

export default RichText
