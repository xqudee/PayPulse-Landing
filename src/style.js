const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading_1: `text-primary font-urbanist font-black text-[64px] font-extrabold leading-[70px] capitalize`,
    heading_2_3: `text-primary font-urbanist font-black font-bold md:text-[56px] md:leading-[65px] md:tracking-0 text-[40px] leading-[52px] tracking-[-0.88px]`,
    heading_3: `text-primary font-urbanist font-black text-[40px] font-bold leading-[52px] tracking-[-0.88px]`,
    heading_4: `text-primary font-urbanist font-black text-[36px] font-bold leading-[40px] tracking-[-1px]`,
    heading_5: `text-primary font-urbanist font-black text-[30px] font-bold leading-[40px] tracking-[-1px]`,
    heading_6: `text-primary font-urbanist font-black text-[24px] font-bold leading-[32px]`,

    leadParagraph: 'text-primary font-[18px] leading-[34px]',
    bodyParagraph: 'text-primary font-[16px] leading-[24px]',
    smallParagraph: 'text-primary font-[14px] leading-[22px]',

    paddingX: 'md:px-[80px] sm:px-[72px] px-[24px]',
    paddingY: 'lg:py-[112px] py-[56px]',
}

export const layout = {
    container: `${styles.paddingX} ${styles.paddingY}`
}

export default styles;