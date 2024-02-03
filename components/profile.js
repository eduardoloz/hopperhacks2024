import ''

const profile = ({proj}) => {
	const title = proj.title;
	const link = proj.link;
  const description = proj.description

  return (
    <div className='profile'>
        <p>{description}</p>
    </div>
	);
}

export default Project;