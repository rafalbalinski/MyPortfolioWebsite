// footerYear - Year in footer section

const handleCurrentYear = () => {
    footerYear.innerText = new Date().getFullYear();
}
handleCurrentYear();