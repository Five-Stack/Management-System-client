

const YearOption = ({ startYear, endYear }) => {
    //if start year is greater than end year it will sawp
    if (startYear > endYear) {
        let temp = startYear;
        let startYear = endYear;
        let endYear = temp;
    }
    //-------------------------------------------------

    const yearDiff = endYear - startYear;
    let year = startYear;
    let Years = [];

    for (let i = 0; i <= yearDiff; i++) {
        Years.push(year)
        year++
    }
    Years.reverse();

    return (
        <>
            {Years.map((year, index) => <option key={index} value={year}>{year}</option>)}
        </>
    );
};

export default YearOption;