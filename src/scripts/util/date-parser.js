class DateParser {
  static parseMonth (month) {
    switch (month) {
      case 0: month = 'Januari'; break;
      case 1: month = 'Februari'; break;
      case 2: month = 'Maret'; break;
      case 3: month = 'April'; break;
      case 4: month = 'Mei'; break;
      case 5: month = 'Juni'; break;
      case 6: month = 'Juli'; break;
      case 7: month = 'Agustus'; break;
      case 8: month = 'September'; break;
      case 9: month = 'Oktober'; break;
      case 10: month = 'November'; break;
      case 11: month = 'Desember'; break;
    }
    return month;
  }

  static getDateNow () {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const monthParsed = this.parseMonth(month);
    return `${date} ${monthParsed} ${year}`;
  }
}

export default DateParser;
