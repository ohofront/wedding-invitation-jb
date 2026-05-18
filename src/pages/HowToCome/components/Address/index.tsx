const Address = () => {
  return (
    // 전체 요소들을 가운데로 정렬하기 위해 flex flex-col items-center 추가
    <div className='flex flex-col items-center pb-5'>
      <div className='mb-5 text-xl'>오시는 길</div>

      <div className='flex flex-col items-center my-2 leading-8'>
        <div className='mb-2 text-[18px]'>셀럽앤어셈 2층 디 아이올라홀</div>

        {/* 주소 덩어리: 텍스트 줄맞춤을 위해 text-left 추가 */}
        <div className='flex flex-col gap-1 text-[15px] text-gray-600 tracking-tight break-keep text-left'>
          <div className='flex'>
            <span className='w-[50px] shrink-0 font-medium'>도로명</span>
            <span>서울 강남구 언주로 711 건설회관</span>
          </div>

          <div className='flex'>
            <span className='w-[50px] shrink-0 font-medium'>지번</span>
            <span>서울 강남구 논현동 71-2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
