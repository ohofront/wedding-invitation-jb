import middleInfoImage from '@/assets/images/middleInfoImage.png';

const GreetingMessage = () => {
  return (
    <>
      <div className='text-xl font-medium'>소중한 분들을 초대합니다</div>

      <div className='m-10 leading-8'>
        눈부신 초록빛이 가득한 8월 어느 날,
        <br />
        저희 두 사람 여름날의 뜨거운 햇살 아래
        <br />
        서로의 시원한 그늘이 되어주겠다는
        <br />
        약속을 하려 합니다.
        <br />
        <br />
        저희의 약속이 깊이 뿌리 내릴 수 있도록
        <br />
        함께 축하해 주시면 감사하겠습니다.
      </div>

      {/* Content 이미지 */}
      <div className='pt-4'>
        <img src={middleInfoImage} className='w-full' alt='wedding information' />
      </div>
    </>
  );
};

export default GreetingMessage;
