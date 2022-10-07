function transformMovieDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;

  if (hours === 0) {
    return `${minutes}м`
  } else if (minutes === 0) {
    return `${hours}ч`
  }  else {
    return `${hours}ч${minutes}м`
  }
}

export {
  transformMovieDuration
}