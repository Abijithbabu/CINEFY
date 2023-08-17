export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const timeDiff = now.getTime() - date.getTime();

  const minuteInMillis = 60 * 1000;
  const hourInMillis = 60 * minuteInMillis;
  const dayInMillis = 24 * hourInMillis;
  const monthInMillis = 30 * dayInMillis;
  const yearInMillis = 365 * dayInMillis;

  if (timeDiff < minuteInMillis) {
    const seconds = Math.floor(timeDiff / 1000);
    return `${seconds} ${seconds === 1 ? "sec" : "secs"} ago`;
  } else if (timeDiff < hourInMillis) {
    const minutes = Math.floor(timeDiff / minuteInMillis);
    return `${minutes} ${minutes === 1 ? "min" : "mins"} ago`;
  } else if (timeDiff < dayInMillis) {
    const hours = Math.floor(timeDiff / hourInMillis);
    return `${hours} ${hours === 1 ? "hr" : "hrs"} ago`;
  } else if (timeDiff < monthInMillis) {
    const days = Math.floor(timeDiff / dayInMillis);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (timeDiff < yearInMillis) {
    const months = Math.floor(timeDiff / monthInMillis);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else {
    const years = Math.floor(timeDiff / yearInMillis);
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  }
}


export function moveToTop(array, targetId,msg,selected) {
  console.log(targetId)
  const newArray = array.slice()
  const targetIndex = newArray.findIndex(item => item._id === targetId);
  console.log(newArray)
  
  if (targetIndex !== -1) {
    const targetItem = newArray.splice(targetIndex, 1)[0];
  console.log(newArray)
   targetItem.lastMsg= msg
if(targetId !== selected){
  const count = targetItem?.unRead? ++targetItem.unRead.count : 1
  targetItem.unRead = targetItem?.unRead?.id === selected ? {id:selected,count:count} : {id:selected,count:1}
}
    newArray.unshift(targetItem);
  }
  
  return newArray;
}