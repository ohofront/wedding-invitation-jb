import React from 'react';

const BlessingContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='mb-8 leading-8'>
        <p>멀리서도 축하의 마음을 전하고 싶으신 분들을 위해</p>
        <p>계좌번호를 안내드립니다.</p>
        <br />
        <p>소중한 축하를 보내주셔서 감사드리며,</p>
        <p>따뜻한 마음에 깊이 감사드립니다.</p>
      </div>
      {children}
    </div>
  );
};

export default BlessingContent;
