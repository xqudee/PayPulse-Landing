const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading: "font-urbanist font-normal font-black",
    heading_1: `font-urbanist font-black text-[64px] font-extrabold leading-[70px] capitalize`,
    heading_2: `font-urbanist font-black text-[56px] font-bold leading-[65px]`,
    heading_3: `font-urbanist font-black text-[40px] font-bold leading-[52px] tracking-[-0.88px]`,
    heading_4: `font-urbanist font-black text-[36px] font-bold leading-[40px] tracking-[-1px]`,
    heading_5: `font-urbanist font-black text-[30px] font-bold leading-[40px] tracking-[-1px]`,
    heading_6: `font-urbanist font-black text-[24px] font-bold leading-[32px]`,

    leadParagraph: 'font-[18px] leading-[34px]',
    bodyParagraph: 'font-[16px] leading-[24px]',
    smallParagraph: 'font-[14px] leading-[22px]',

    paddingX: 'md:px-[80px] sm:px-[72px] px-[24px]',
    paddingY: 'lg:py-[112px] py-[56px]',
}

export const layout = {
    container: `${styles.paddingX} ${styles.paddingY}`
}

export default styles;