const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading_1: `text-primary font-urbanist text-[64px] font-extrabold leading-[70px] capitalize`,
    heading_2: `text-primary font-urbanist font-bold text-[56px] leading-[65px]`,
    heading_3: `text-primary font-urbanist text-[40px] font-bold leading-[52px] tracking-[-0.88px]`,
    heading_4: `text-primary font-urbanist text-[36px] font-bold leading-[40px] tracking-[-1px]`,
    heading_5: `text-primary font-urbanist text-[30px] font-bold leading-[40px] tracking-[-1px]`,
    heading_6: `text-primary font-urbanist text-[24px] font-bold leading-[32px]`,
    
    heading_2_3: `text-primary font-urbanist font-bold md:text-[56px] md:leading-[65px] md:tracking-0 text-[40px] leading-[52px] tracking-[-0.88px]`,
    heading_5_6: `text-primary font-urbanist font-bold md:text-[30px] md:leading-[40px] md:tracking-[-1px] text-[24px] leading-[32px]`,
    heading_3_5: `text-primary font-urbanist font-bold md:text-[40px] md:leading-[52px] md:tracking-[-0.88px] text-[30px] leading-[40px] tracking-[-1px]`,

    leadParagraph: 'text-primary font-[18px] leading-[34px]',
    bodyParagraph: 'text-primary font-[16px] leading-[24px]',
    smallParagraph: 'text-primary font-[14px] leading-[22px]',

    paddingX: 'md:px-[80px] sm:px-[72px] px-[24px]',
    paddingY: 'lg:py-[112px] py-[56px]',
}

export const layout = {
    container: `${styles.paddingX} ${styles.paddingY}`,
    containerTextCenter: "flex flex-col gap-[40px] text-center max-w-[630px]",

    containerCenter: `${styles.paddingX} ${styles.paddingY} flex flex-col gap-[72px] items-center`
}

export default styles;