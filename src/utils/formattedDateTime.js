export function formattedDateTime(tanggalString) {
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const [datePart, timePart] = tanggalString.split(' ');
    const [year, month, day] = datePart.split('-').map(Number);

    const formattedDate = `${day} ${months[month - 1]} ${year}`;

    return formattedDate;
}
