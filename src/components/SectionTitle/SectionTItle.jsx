const SectionTItle = ({heading,subHeading}) => {
    return (
        <div className="pb-5">
            <p className='text-sm text-center py-2 text-[#D99904] italic'>{subHeading}</p>
            <h4 className='text-center text-3xl font-bold pb-2'>{heading}</h4>
        </div>
    );
};

export default SectionTItle;