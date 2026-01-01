const MainButton = (props) => {
  const { content , colors } = props;
  return (
    <button type="button" className={`${colors} font-bold px-7 py-3 border-2 rounded-full`}>
      {content}
    </button>
  )
}

export default MainButton