const SectionTItle = ({heading,subHeading}) => {
    return (
        <div className="pb-5 w-3/12 mx-auto text-center">
            <p className='text-sm py-2 text-[#D99904] italic'>{subHeading}</p>
            <h4 className='text-3xl font-bold pb-2 border-y-4'>{heading}</h4>
        </div>
    );
};

export default SectionTItle;