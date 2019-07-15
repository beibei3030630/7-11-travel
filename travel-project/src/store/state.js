let defaultCity = "北京";

try {
    if (localStorage.city) {
      defaultCity = localStorage.city;
    }
  } catch (err) {
    console.log(err);
  }
export default{
    city: defaultCity
}