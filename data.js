var APP_DATA = {
  scenes: [
    {
      id: "0-ging-tri",
      name: "Giếng trời",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 4000,
      initialViewParameters: {
        yaw: -0.04428956952444807,
        pitch: -0.11619268226187529,
        fov: 1.3864150788895888,
      },
      linkHotspots: [
        {
          yaw: -0.04428953782533185,
          pitch: 0.11076827601620032,
          rotation: 0,
          target: "1-snh-chnh",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-snh-chnh",
      name: "Sảnh chính",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 4000,
      initialViewParameters: {
        yaw: -1.04339140795922,
        pitch: -0.07942245678151139,
        fov: 1.3864150788895888,
      },
      linkHotspots: [
        {
          yaw: -0.0022164398620514447,
          pitch: 0.12655453364770963,
          rotation: 0,
          target: "0-ging-tri",
        },
        {
          yaw: 1.5649280553301308,
          pitch: 0.0707961151784744,
          rotation: 0,
          target: "2-gn-phng-dch-v-sinh-vin",
        },
      ],
      infoHotspots: [
        {
          yaw: 2.0710699023943357,
          pitch: -0.10453284655720374,
          title: "Phòng tuyển sinh Cao đẳng",
          text: "<p>Đây là không gian được thiết kế hiện đại, chuyên nghiệp, và thân thiện, giúp bạn dễ dàng tiếp cận các thông tin tuyển sinh, chương trình đào tạo, và cơ hội học bổng.</p>",
        },
        {
          yaw: -2.0681572614626944,
          pitch: -0.10337706011596026,
          title: "Phòng tuyển sinh Phổ cao",
          text: "Đây là không gian hiện đại và thân thiện, nơi cung cấp thông tin toàn diện và hỗ trợ tận tình cho các bạn học sinh, sinh viên cùng phụ huynh.",
        },
      ],
    },
    {
      id: "2-gn-phng-dch-v-sinh-vin",
      name: "Gần phòng dịch vụ sinh viên",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 4000,
      initialViewParameters: {
        yaw: -0.7961701814088578,
        pitch: -0.010705907945098403,
        fov: 1.3864150788895888,
      },
      linkHotspots: [
        {
          yaw: -3.1121099460014072,
          pitch: 0.020429011257460772,
          rotation: 0,
          target: "1-snh-chnh",
        },
        {
          yaw: -1.6238233064766074,
          pitch: 0.05796356030488781,
          rotation: 0,
          target: "3-i-din-phng-hi-trng",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.18626805726830398,
          pitch: -0.08583651425905359,
          title: "Phòng dịch vụ sinh viên",
          text: "Đây là không gian hiện đại, chuyên nghiệp và thân thiện, nơi cung cấp các dịch vụ và giải pháp tối ưu để đáp ứng nhu cầu của sinh viên.",
        },
        {
          yaw: -1.1977077255866657,
          pitch: -0.0488362196096368,
          title: "Phòng giám đốc",
          text: "<p>Phòng Giám đốc là không gian trung tâm quản lý và điều hành chiến lược của nhà trường, nơi những quyết định quan trọng được đưa ra để định hướng sự phát triển toàn diện của tổ chức. Với thiết kế hiện đại, sang trọng và trang nhã, phòng thể hiện sự chuyên nghiệp, đẳng cấp và tinh thần lãnh đạo vững mạnh.</p><p></p>",
        },
      ],
    },
    {
      id: "3-i-din-phng-hi-trng",
      name: "Đối diện phòng hội trường",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 4000,
      initialViewParameters: {
        yaw: 0.21913578386148913,
        pitch: -0.056206016711747964,
        fov: 1.3864150788895888,
      },
      linkHotspots: [
        {
          yaw: 0.033006227219427586,
          pitch: 0.006683510647491175,
          rotation: 4.71238898038469,
          target: "4-phng-t-hc",
        },
        {
          yaw: -3.0241721121563696,
          pitch: 0.03870709387143023,
          rotation: 0,
          target: "2-gn-phng-dch-v-sinh-vin",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.49463565950020794,
          pitch: -0.189665371519812,
          title: "Phòng hội trường",
          text: "Phòng Hội trường là không gian rộng lớn, hiện đại, được thiết kế để tổ chức các sự kiện, hội thảo, và hoạt động quan trọng của nhà trường. Với sức chứa lớn, phòng được trang bị hệ thống âm thanh, ánh sáng và màn hình trình chiếu tiên tiến, đảm bảo chất lượng cho mọi chương trình. Nội thất bố trí khoa học với ghế ngồi thoải mái và không gian di chuyển thuận tiện. Hội trường còn được trang trí trang nhã, tạo bầu không khí trang trọng và chuyên nghiệp, là nơi kết nối và lan tỏa giá trị của cộng đồng học tập và phát triển.",
        },
        {
          yaw: -1.233591084009909,
          pitch: -0.3547066517374091,
          title: "Phòng đảm bảo",
          text: '<div class="flex max-w-full flex-col flex-grow"><div data-message-author-role="assistant" data-message-id="c8eceb8c-89b3-4f39-b19e-ee2e64f24ae2" dir="auto" class="min-h-8 text-message flex w-full flex-col items-end gap-2 whitespace-normal break-words text-start [.text-message+&amp;]:mt-5" data-message-model-slug="gpt-4o"><div class="flex w-full flex-col gap-1 empty:hidden first:pt-[3px]"><div class="markdown prose w-full break-words dark:prose-invert light"><p>Phòng Đảm bảo là nơi chịu trách nhiệm giám sát, đánh giá và nâng cao chất lượng giáo dục và dịch vụ của nhà trường. Với thiết kế chuyên nghiệp, không gian được trang bị hệ thống lưu trữ tài liệu, thiết bị công nghệ hiện đại và khu vực làm việc khoa học, hỗ trợ tối ưu cho công tác kiểm định và cải tiến. Đội ngũ nhân viên tại đây luôn nỗ lực duy trì các tiêu chuẩn cao nhất, đảm bảo sự hài lòng và phát triển bền vững của trường. Đây là nơi khởi nguồn cho sự minh bạch và uy tín chất lượng.</p></div></div></div></div>',
        },
      ],
    },
    {
      id: "4-phng-t-hc",
      name: "Phòng tự học",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 4000,
      initialViewParameters: {
        yaw: 0.02958929846301217,
        pitch: 0.09611735849558656,
        fov: 1.3864150788895888,
      },
      linkHotspots: [
        {
          yaw: 2.726924208430365,
          pitch: 0.14458265442015872,
          rotation: 0,
          target: "3-i-din-phng-hi-trng",
        },
      ],
      infoHotspots: [
        {
          yaw: 0.03178152536302825,
          pitch: 0.09392513159557048,
          title: "Phòng tự học",
          text: "Phòng Tự học là không gian yên tĩnh và tiện nghi, được thiết kế dành riêng cho sinh viên tập trung học tập và nghiên cứu. Phòng được trang bị bàn ghế thoải mái, hệ thống chiếu sáng tối ưu và kết nối Wi-Fi mạnh mẽ, tạo điều kiện học tập hiệu quả. Không gian được bố trí khoa học, phù hợp cho cả học nhóm và học cá nhân. Đây là nơi lý tưởng để sinh viên phát huy sự tập trung và nâng cao hiệu suất học tập.",
        },
      ],
    },
  ],
  name: "Virtual Tour 360 - FPT Polytechnic Hà Nam",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: true,
    viewControlButtons: true,
    musicOnStartEnabled: true,
  },
};
