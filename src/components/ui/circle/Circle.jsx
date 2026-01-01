import Image from "next/image"

const Circle = (props) => {
  const { positionClass , translate } = props;
  return (
    <div className={`absolute ${positionClass}
    ${translate == "plus" ? "translate-x-1/2 translate-y-1/2" : "-translate-x-1/2 -translate-y-1/2"} opacity-[0.3]`}>
      <Image src="/images/circle.webp" alt="circle" width={300} height={300} loading="lazy" />
    </div>
  )
}

export default Circle