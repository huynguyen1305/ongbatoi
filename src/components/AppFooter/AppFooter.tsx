import { IconBrandInstagram, IconBrandTiktok, IconBrandFacebook } from '@tabler/icons-react';

import React from 'react';

function AppFooter() {
  return (
    <div className="bg-[#006752] text-white">
      <div className="container mx-auto py-10 flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              textTransform: 'uppercase',
            }}
          >
            GiỚI THIỆU
          </h3>
          <p style={{ lineHeight: '1.5', marginTop: '1rem' }}>
            Chào mừng đến với cộng đồng chăm sóc sức khỏe dành cho người cao tuổi. Chúng tôi tôn
            trọng và quan tâm đến mỗi gia đình, mang đến những nguồn thông tin chính xác và lời
            khuyên thực tế về các khía cạnh trong cuộc sống như dinh dưỡng, vận động và tâm lý, ...
            để xây dựng một cuộc sống khỏe mạnh và tràn đầy niềm vui.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              textTransform: 'uppercase',
            }}
          >
            LIÊN HỆ
          </h3>
          <div>
            <p style={{ lineHeight: '1.5', marginTop: '1rem' }}>Địa chỉ: 123 Địa chỉ, TPHCM</p>
            <p style={{ lineHeight: '1.5', marginTop: '1rem' }}>Điện thoại: 0123456789</p>
            <p style={{ lineHeight: '1.5', marginTop: '1rem' }}>Email: example@example.com</p>
            <div className="flex items-center my-4">
              <IconBrandFacebook size={36} style={{ marginRight: '1rem' }} />
              <IconBrandInstagram size={36} style={{ marginRight: '1rem' }} />
              <IconBrandTiktok size={36} style={{ marginRight: '1rem' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
