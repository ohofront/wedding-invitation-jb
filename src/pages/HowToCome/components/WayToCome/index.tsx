const DashItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex pl-2'>
      <span className='w-4 text-[18px] leading-8'>-</span>
      <div className='flex-1 text-[15px] leading-8'>{children}</div>
    </div>
  );
};

const WayToCome = () => {
  return (
    <div className='px-8 leading-8 text-left'>
      <div className='py-2'>
        <div className='text-[17px]'>지하철</div>

        <DashItem>
          <span className='text-green-600'>7호선 학동역</span> 10번 출구 (도보 7분)
        </DashItem>

        <DashItem>
          <span className='text-yellow-600'>수인분당선</span> &<span className='text-green-600'> 7호선 강남구청역</span>{' '}
          3번 출구 (도보 10분)
        </DashItem>
      </div>

      <div className='py-2'>
        <div className='text-[17px]'>버스</div>

        <DashItem>
          ‘서울세관’ 정류장 하차
          <br />
          간선버스 <span className='text-blue-500'>141</span> / 직행버스 <span className='text-red-500'>3600</span>{' '}
          (도보 1분)
        </DashItem>

        <DashItem>
          ‘서울세관사거리’ 정류장 하차
          <br />
          간선버스 <span className='text-blue-500'>401</span> / 지선버스{' '}
          <span className='text-green-600'>6411, 8641</span> (도보 4분)
        </DashItem>
      </div>

      <div className='py-2'>
        <div className='text-[17px]'>자가용</div>

        <DashItem>네비게이션 검색명 : “셀럽앤어셈” 또는 “건설회관”</DashItem>

        <DashItem>도로명 주소 : 서울 강남구 언주로 711</DashItem>

        <DashItem>구) 지번 주소 : 서울 강남구 논현동 71-2</DashItem>
      </div>

      <div className='py-2'>
        <div className='text-[17px]'>주차</div>

        <DashItem>
          건설회관 주차장 <span className='border-b-2'>차량 등록 시 1시간 30분 무료</span>
        </DashItem>

        <DashItem>600대 동시 주차 가능합니다.</DashItem>
      </div>
    </div>
  );
};

export default WayToCome;
