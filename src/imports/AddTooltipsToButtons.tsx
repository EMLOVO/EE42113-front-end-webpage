import imgImage from "figma:asset/593f8d3f382352c34e798960f5accd98713c996c.png";

function Image() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[800px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function MasteryOverlay() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.6)] grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[56.047px]" data-name="MasteryOverlay">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[56.047px]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[46.484px] items-start left-[344.16px] rounded-[3.35544e+07px] top-[217.94px] w-[56.047px]" data-name="Container26">
      <MasteryOverlay />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Higher Math</p>
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.281px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text">
      <Paragraph />
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[344px] pb-0 pl-[6.578px] pr-[48.531px] pt-[19.375px] rounded-[3.35544e+07px] size-[56.391px] top-[213px]" data-name="SlotClone">
      <Text />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[600px] left-0 overflow-clip top-0 w-[800px]" data-name="ImageWithFallback">
      <Image />
      <Container26 />
      <SlotClone />
    </div>
  );
}

function MasteryOverlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[43.328px] relative rounded-[3.35544e+07px] shrink-0 w-[39px]" data-name="MasteryOverlay1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.328px] w-[39px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[37px] items-start left-[401px] rounded-[3.35544e+07px] top-[44px] w-[39px]" data-name="Container27">
      <MasteryOverlay1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Quadratics</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.219px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text1">
      <Paragraph1 />
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[45px] items-start left-[401px] pb-0 pl-[4.719px] pr-[33.063px] pt-[20.016px] rounded-[3.35544e+07px] top-[40px] w-[39px]" data-name="SlotClone">
      <Text1 />
    </div>
  );
}

function MasteryOverlay2() {
  return (
    <div className="h-[46.484px] relative rounded-[3.35544e+07px] shrink-0 w-[42px]" data-name="MasteryOverlay2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46.484px] w-[42px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.19)] content-stretch flex flex-col h-[40px] items-start left-[349px] rounded-[3.35544e+07px] top-[110px] w-[42px]" data-name="Container28">
      <MasteryOverlay2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Algebra Basics</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.281px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text2">
      <Paragraph2 />
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[343px] pb-0 pl-[6.578px] pr-[48.531px] pt-[19.375px] rounded-[3.35544e+07px] size-[56.391px] top-[103px]" data-name="SlotClone">
      <Text2 />
    </div>
  );
}

function MasteryOverlay3() {
  return (
    <div className="h-[49.281px] relative rounded-[3.35544e+07px] shrink-0 w-[41px]" data-name="MasteryOverlay3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.281px] w-[41px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.13)] content-stretch flex flex-col h-[38px] items-start left-[440px] rounded-[3.35544e+07px] top-[97px] w-[41px]" data-name="Container29">
      <MasteryOverlay3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Calculus Intro</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.328px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text3">
      <Paragraph3 />
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.13)] box-border content-stretch flex flex-col h-[45px] items-start left-[440px] pb-0 pl-[8.375px] pr-[32.297px] pt-[18.609px] rounded-[3.35544e+07px] top-[94px] w-[42px]" data-name="SlotClone">
      <Text3 />
    </div>
  );
}

function MasteryOverlay4() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[45px] relative rounded-[3.35544e+07px] shrink-0 w-[41px]" data-name="MasteryOverlay4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45px] w-[41px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[27px] items-start left-[502px] rounded-[3.35544e+07px] top-[84px] w-[41px]" data-name="Container30">
      <MasteryOverlay4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Data Analysis</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.391px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text4">
      <Paragraph4 />
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[30px] items-start left-[500px] pb-0 pl-[11.797px] pr-[30.813px] pt-[16.625px] rounded-[3.35544e+07px] top-[82px] w-[44px]" data-name="SlotClone">
      <Text4 />
    </div>
  );
}

function MasteryOverlay5() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.6)] grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[54.641px]" data-name="MasteryOverlay5">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[54.641px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[43.328px] items-start left-[469px] rounded-[3.35544e+07px] top-[154.27px] w-[54.641px]" data-name="Container31">
      <MasteryOverlay5 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Zero Properties</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.219px] items-start overflow-clip pb-0 pl-[0.516px] relative shrink-0 w-full" data-name="Text5">
      <Paragraph5 />
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[469.38px] pb-0 pl-[4.469px] pr-[48.188px] pt-[31.656px] rounded-[3.35544e+07px] size-[53.875px] top-[149px]" data-name="SlotClone">
      <Text5 />
    </div>
  );
}

function MasteryOverlay6() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[52.813px]" data-name="MasteryOverlay6">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[52.813px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[39.844px] items-start left-[435px] rounded-[3.35544e+07px] top-[234.55px] w-[52.813px]" data-name="Container32">
      <MasteryOverlay6 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Basic Operations</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.156px] items-start overflow-clip pb-0 pl-[0.344px] relative shrink-0 w-full" data-name="Text6">
      <Paragraph6 />
    </div>
  );
}

function SlotClone6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[435.92px] pb-0 pl-[2.656px] pr-[47.156px] pt-[28.313px] rounded-[3.35544e+07px] size-[50.969px] top-[229px]" data-name="SlotClone">
      <Text6 />
    </div>
  );
}

function MasteryOverlay7() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[49.281px] relative rounded-[3.35544e+07px] shrink-0 w-[39px]" data-name="MasteryOverlay7">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.281px] w-[39px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[507px] rounded-[3.35544e+07px] top-[191px] w-[39px]" data-name="Container33">
      <MasteryOverlay7 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Y-intercepts</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.328px] items-start overflow-clip pb-0 pl-[0.828px] relative shrink-0 w-full" data-name="Text7">
      <Paragraph7 />
    </div>
  );
}

function SlotClone7() {
  return (
    <div className="absolute h-[19px] left-[506px] rounded-[3.35544e+07px] top-[198px] w-[41px]" data-name="SlotClone">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[19px] items-start pb-0 pl-[7.969px] pr-[31.703px] pt-[37.625px] relative w-[41px]">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function MasteryOverlay8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[54.641px]" data-name="MasteryOverlay8">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[54.641px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.19)] content-stretch flex flex-col h-[43.328px] items-start left-[544px] rounded-[3.35544e+07px] top-[237.27px] w-[54.641px]" data-name="Container34">
      <MasteryOverlay8 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">X-intercepts</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.219px] items-start overflow-clip pb-0 pl-[0.516px] relative shrink-0 w-full" data-name="Text8">
      <Paragraph8 />
    </div>
  );
}

function SlotClone8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.19)] box-border content-stretch flex flex-col items-start left-[544.38px] pb-0 pl-[4.469px] pr-[48.188px] pt-[31.656px] rounded-[3.35544e+07px] size-[53.875px] top-[232px]" data-name="SlotClone">
      <Text8 />
    </div>
  );
}

function MasteryOverlay9() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[48px]" data-name="MasteryOverlay9">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[48px]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[483px] rounded-[3.35544e+07px] top-[308px] w-[48px]" data-name="Container35">
      <MasteryOverlay9 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Equations</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="box-border content-stretch flex flex-col h-px items-start overflow-clip pb-0 pl-0 relative shrink-0 w-full" data-name="Text9">
      <Paragraph9 />
    </div>
  );
}

function SlotClone9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[485px] pb-0 pr-[44px] pt-[21px] rounded-[3.35544e+07px] size-[44px] top-[302px]" data-name="SlotClone">
      <Text9 />
    </div>
  );
}

function MasteryOverlay10() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[57.563px]" data-name="MasteryOverlay10">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[57.563px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[51.703px] items-start left-[451.27px] rounded-[3.35544e+07px] top-[379.19px] w-[57.563px]" data-name="Container36">
      <MasteryOverlay10 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Geometry</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.359px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text10">
      <Paragraph10 />
    </div>
  );
}

function SlotClone10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[450px] pb-0 pl-[10.125px] pr-[48.609px] pt-[17.688px] rounded-[3.35544e+07px] size-[60.094px] top-[375px]" data-name="SlotClone">
      <Text10 />
    </div>
  );
}

function MasteryOverlay11() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.3)] grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[50.594px]" data-name="MasteryOverlay11">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[50.594px]" />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.047px] items-start left-[500px] rounded-[3.35544e+07px] top-[354.8px] w-[50.594px]" data-name="Container37">
      <MasteryOverlay11 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Matrices</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.078px] items-start overflow-clip pb-0 pl-[0.156px] relative shrink-0 w-full" data-name="Text11">
      <Paragraph11 />
    </div>
  );
}

function SlotClone11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[501.47px] pb-0 pl-[0.828px] pr-[45.75px] pt-[24.75px] rounded-[3.35544e+07px] size-[47.656px] top-[349px]" data-name="SlotClone">
      <Text11 />
    </div>
  );
}

function MasteryOverlay12() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.6)] grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[50.594px]" data-name="MasteryOverlay12">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[50.594px]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36.047px] items-start left-[593px] rounded-[3.35544e+07px] top-[283.8px] w-[50.594px]" data-name="Container38">
      <MasteryOverlay12 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Number Theory</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.078px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text12">
      <Paragraph12 />
    </div>
  );
}

function SlotClone12() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[594.47px] pb-0 pl-[0.906px] pr-[45.672px] pt-[20.828px] rounded-[3.35544e+07px] size-[47.656px] top-[278px]" data-name="SlotClone">
      <Text12 />
    </div>
  );
}

function MasteryOverlay13() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[52.813px]" data-name="MasteryOverlay13">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[52.813px]" />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.21)] content-stretch flex flex-col h-[39.844px] items-start left-[286px] rounded-[3.35544e+07px] top-[203.55px] w-[52.813px]" data-name="Container39">
      <MasteryOverlay13 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Functions</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.156px] items-start overflow-clip pb-0 pl-[0.344px] relative shrink-0 w-full" data-name="Text13">
      <Paragraph13 />
    </div>
  );
}

function SlotClone13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.21)] box-border content-stretch flex flex-col items-start left-[286.92px] pb-0 pl-[2.656px] pr-[47.156px] pt-[28.313px] rounded-[3.35544e+07px] size-[50.969px] top-[198px]" data-name="SlotClone">
      <Text13 />
    </div>
  );
}

function MasteryOverlay14() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[53.734px] relative rounded-[3.35544e+07px] shrink-0 w-[44px]" data-name="MasteryOverlay14">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[53.734px] w-[44px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[344px] rounded-[3.35544e+07px] top-[25px] w-[44px]" data-name="Container40">
      <MasteryOverlay14 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Polynomials</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.391px] items-start overflow-clip pb-0 pl-[1.141px] relative shrink-0 w-full" data-name="Text14">
      <Paragraph14 />
    </div>
  );
}

function SlotClone14() {
  return (
    <div className="absolute h-[40px] left-[343px] rounded-[3.35544e+07px] top-[23px] w-[46px]" data-name="SlotClone">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[40px] items-start pb-0 pl-[11.219px] pr-[33.391px] pt-[42.438px] relative w-[46px]">
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function MasteryOverlay15() {
  return (
    <div className="h-[46.484px] relative rounded-[3.35544e+07px] shrink-0 w-[44px]" data-name="MasteryOverlay15">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46.484px] w-[44px]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.18)] content-stretch flex flex-col h-[42px] items-start left-[209px] rounded-[3.35544e+07px] top-[213px] w-[44px]" data-name="Container41">
      <MasteryOverlay15 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Operations</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.281px] items-start overflow-clip pb-0 pl-[0.672px] relative shrink-0 w-full" data-name="Text15">
      <Paragraph15 />
    </div>
  );
}

function SlotClone15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.18)] box-border content-stretch flex flex-col h-[50px] items-start left-[209px] pb-0 pl-[6.234px] pr-[36.484px] pt-[34.766px] rounded-[3.35544e+07px] top-[209px] w-[44px]" data-name="SlotClone">
      <Text15 />
    </div>
  );
}

function MasteryOverlay16() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[35px] relative rounded-[3.35544e+07px] shrink-0 w-[37px]" data-name="MasteryOverlay16">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35px] w-[37px]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[221px] rounded-[3.35544e+07px] top-[276px] w-[37px]" data-name="Container42">
      <MasteryOverlay16 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Word Problems</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.359px] items-start overflow-clip pb-0 pl-px relative shrink-0 w-full" data-name="Text16">
      <Paragraph16 />
    </div>
  );
}

function SlotClone16() {
  return (
    <div className="absolute h-[24px] left-[220px] rounded-[3.35544e+07px] top-[274px] w-[39px]" data-name="SlotClone">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[24px] items-start pb-0 pl-[9.625px] pr-[28.016px] pt-[40.188px] relative w-[39px]">
          <Text16 />
        </div>
      </div>
    </div>
  );
}

function MasteryOverlay17() {
  return (
    <div className="h-[39.844px] relative rounded-[3.35544e+07px] shrink-0 w-[37px]" data-name="MasteryOverlay17">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.844px] w-[37px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.19)] content-stretch flex flex-col h-[34px] items-start left-[320px] rounded-[3.35544e+07px] top-[298px] w-[37px]" data-name="Container43">
      <MasteryOverlay17 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Ratios</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.156px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text17">
      <Paragraph17 />
    </div>
  );
}

function SlotClone17() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.19)] box-border content-stretch flex flex-col h-[43px] items-start left-[320px] pb-0 pl-[2.828px] pr-[32.016px] pt-[20.5px] rounded-[3.35544e+07px] top-[294px] w-[36px]" data-name="SlotClone">
      <Text17 />
    </div>
  );
}

function MasteryOverlay18() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[43.328px] relative rounded-[3.35544e+07px] shrink-0 w-[38px]" data-name="MasteryOverlay18">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.328px] w-[38px]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col h-[37px] items-start left-[255px] rounded-[3.35544e+07px] top-[319px] w-[38px]" data-name="Container44">
      <MasteryOverlay18 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Statistics</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.219px] items-start overflow-clip pb-0 pl-[0.516px] relative shrink-0 w-full" data-name="Text18">
      <Paragraph18 />
    </div>
  );
}

function SlotClone18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[45px] items-start left-[255px] pb-0 pl-[4.469px] pr-[32.313px] pt-[31.656px] rounded-[3.35544e+07px] top-[315px] w-[38px]" data-name="SlotClone">
      <Text18 />
    </div>
  );
}

function MasteryOverlay19() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[49.281px] relative rounded-[3.35544e+07px] shrink-0 w-[41px]" data-name="MasteryOverlay19">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.281px] w-[41px]" />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[36px] items-start left-[266px] rounded-[3.35544e+07px] top-[382px] w-[41px]" data-name="Container45">
      <MasteryOverlay19 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Variables</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.328px] items-start overflow-clip pb-0 pl-[0.828px] relative shrink-0 w-full" data-name="Text19">
      <Paragraph19 />
    </div>
  );
}

function SlotClone19() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[266px] pb-0 pl-[7.969px] pr-[32.703px] pt-[37.625px] rounded-[3.35544e+07px] size-[42px] top-[379px]" data-name="SlotClone">
      <Text19 />
    </div>
  );
}

function MasteryOverlay20() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[55.359px] relative rounded-[3.35544e+07px] shrink-0 w-[37px]" data-name="MasteryOverlay20">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[55.359px] w-[37px]" />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[34px] items-start left-[154px] rounded-[3.35544e+07px] top-[286px] w-[37px]" data-name="Container46">
      <MasteryOverlay20 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Trigonometry</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.406px] items-start overflow-clip pb-0 pl-[1.281px] relative shrink-0 w-full" data-name="Text20">
      <Paragraph20 />
    </div>
  );
}

function SlotClone20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[47px] items-start left-[148px] pb-0 pl-[12.719px] pr-[30.875px] pt-[44.359px] rounded-[3.35544e+07px] top-[276px] w-[45px]" data-name="SlotClone">
      <Text20 />
    </div>
  );
}

function MasteryOverlay21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0 w-[48px]" data-name="MasteryOverlay21">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[48px]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.22)] content-stretch flex flex-col h-[32px] items-start left-[192px] rounded-[3.35544e+07px] top-[343px] w-[48px]" data-name="Container47">
      <MasteryOverlay21 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Units</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="box-border content-stretch flex flex-col h-px items-start overflow-clip pb-0 pl-0 relative shrink-0 w-full" data-name="Text21">
      <Paragraph21 />
    </div>
  );
}

function SlotClone21() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.22)] box-border content-stretch flex flex-col items-start left-[194px] pb-0 pr-[44px] pt-[21px] rounded-[3.35544e+07px] size-[44px] top-[337px]" data-name="SlotClone">
      <Text21 />
    </div>
  );
}

function MasteryOverlay22() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[43.328px] relative rounded-[3.35544e+07px] shrink-0 w-[46px]" data-name="MasteryOverlay22">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43.328px] w-[46px]" />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[35px] items-start left-[329px] rounded-[3.35544e+07px] top-[391px] w-[46px]" data-name="Container48">
      <MasteryOverlay22 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Jump Functions</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.219px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text22">
      <Paragraph22 />
    </div>
  );
}

function SlotClone22() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[43px] items-start left-[329px] pb-0 pl-[4.719px] pr-[40.063px] pt-[20.016px] rounded-[3.35544e+07px] top-[387px] w-[46px]" data-name="SlotClone">
      <Text22 />
    </div>
  );
}

function MasteryOverlay23() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[49.281px] relative rounded-[3.35544e+07px] shrink-0 w-[48px]" data-name="MasteryOverlay23">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[49.281px] w-[48px]" />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col h-[46px] items-start left-[317px] rounded-[3.35544e+07px] top-[156px] w-[48px]" data-name="Container49">
      <MasteryOverlay23 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Kinematics</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.328px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text23">
      <Paragraph23 />
    </div>
  );
}

function SlotClone23() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[54px] items-start left-[317px] pb-0 pl-[8.375px] pr-[39.297px] pt-[18.609px] rounded-[3.35544e+07px] top-[152px] w-[49px]" data-name="SlotClone">
      <Text23 />
    </div>
  );
}

function MasteryOverlay24() {
  return (
    <div className="h-[51.703px] relative rounded-[3.35544e+07px] shrink-0 w-[39px]" data-name="MasteryOverlay24">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.703px] w-[39px]" />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.17)] content-stretch flex flex-col h-[34px] items-start left-[246px] rounded-[3.35544e+07px] top-[152px] w-[39px]" data-name="Container50">
      <MasteryOverlay24 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Integers</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.359px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text24">
      <Paragraph24 />
    </div>
  );
}

function SlotClone24() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.17)] box-border content-stretch flex flex-col h-[40px] items-start left-[245px] pb-0 pl-[10.125px] pr-[29.516px] pt-[17.688px] rounded-[3.35544e+07px] top-[149px] w-[41px]" data-name="SlotClone">
      <Text24 />
    </div>
  );
}

function MasteryOverlay25() {
  return (
    <div className="h-[53.734px] relative rounded-[3.35544e+07px] shrink-0 w-[43px]" data-name="MasteryOverlay25">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[53.734px] w-[43px]" />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.19)] content-stretch flex flex-col h-[41px] items-start left-[279px] rounded-[3.35544e+07px] top-[105px] w-[43px]" data-name="Container51">
      <MasteryOverlay25 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arimo:Regular',_sans-serif] font-normal leading-[24px] left-0 text-[#212121] text-[16px] text-nowrap top-0 whitespace-pre">Linear Equations</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="box-border content-stretch flex flex-col h-[1.391px] items-start overflow-clip pb-0 relative shrink-0 w-full" data-name="Text25">
      <Paragraph25 />
    </div>
  );
}

function SlotClone25() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.19)] box-border content-stretch flex flex-col items-start left-[277px] pb-0 pl-[11.797px] pr-[33.813px] pt-[16.625px] rounded-[3.35544e+07px] size-[47px] top-[102px]" data-name="SlotClone">
      <Text25 />
    </div>
  );
}

function AchievementTree() {
  return (
    <div className="absolute h-[600px] left-0 overflow-clip top-0 w-[697px]" data-name="AchievementTree">
      <ImageWithFallback />
      <Container27 />
      <SlotClone1 />
      <Container28 />
      <SlotClone2 />
      <Container29 />
      <SlotClone3 />
      <Container30 />
      <SlotClone4 />
      <Container31 />
      <SlotClone5 />
      <Container32 />
      <SlotClone6 />
      <Container33 />
      <SlotClone7 />
      <Container34 />
      <SlotClone8 />
      <Container35 />
      <SlotClone9 />
      <Container36 />
      <SlotClone10 />
      <Container37 />
      <SlotClone11 />
      <Container38 />
      <SlotClone12 />
      <Container39 />
      <SlotClone13 />
      <Container40 />
      <SlotClone14 />
      <Container41 />
      <SlotClone15 />
      <Container42 />
      <SlotClone16 />
      <Container43 />
      <SlotClone17 />
      <Container44 />
      <SlotClone18 />
      <Container45 />
      <SlotClone19 />
      <Container46 />
      <SlotClone20 />
      <Container47 />
      <SlotClone21 />
      <Container48 />
      <SlotClone22 />
      <Container49 />
      <SlotClone23 />
      <Container50 />
      <SlotClone24 />
      <Container51 />
      <SlotClone25 />
    </div>
  );
}

function StudyTreeWithTooltips() {
  return (
    <div className="bg-gray-50 h-[905px] relative shrink-0 w-full" data-name="StudyTreeWithTooltips">
      <AchievementTree />
    </div>
  );
}

export default function AddTooltipsToButtons() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Add Tooltips to Buttons">
      <StudyTreeWithTooltips />
    </div>
  );
}