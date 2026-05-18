import ContactDialog from '@/pages/MiddleInfo/components/Greetings/Contacting/ContactDialog';

const Contacting = () => {
  return (
    <>
      {/* 신랑측, 신부측 이름 */}
      <div className='py-4 leading-9'>
        <div>
          <span className='text-lg'>고창배ㆍ김연미</span>
          <span className='text-sm mx-2 text-[#8a857f]'>
            <span>의</span>
            <span className='ml-1'>아들</span>
          </span>
          <span className='text-lg'>정범</span>
        </div>
        <div>
          <span className='text-lg'>김흥규ㆍ박현희</span>
          <span className='text-sm mx-2 text-[#8a857f]'>
            <span>의</span>
            <span className='mx-2'>딸</span>
          </span>
          <span className='text-lg'>지연</span>
        </div>
      </div>

      {/* 연락하기 버튼 */}
      <div className='flex items-center justify-center'>
        <ContactDialog />
      </div>
    </>
  );
};

export default Contacting;
