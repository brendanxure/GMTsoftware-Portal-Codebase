export const initialState = {
  user: null,
  isLoggedIn: false,
  TaskList: [],
  userprofile: [],
};
// Reference

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       axios
//         .post("http://localhost:5000/api/users/login", {
//           email: action.payload.email,
//           password: action.payload.password,
//         })
//         .then((res) => {
//           if (res.data.success) {
//             localStorage.setItem("token", res.data.token);
//             return {

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_DASHBOARD":
      return {
        ...state,
        user: action.user,
        isLoggedIn: action.isLoggedIn,
        TaskList: action.TaskList,
      };
    case "FILTER_CURRENTUSER":
      return {
        ...state,
        TaskList: state.TaskList.filter(
          (item) => item.EachUser === action.EachUser
        ),
      };

    // user: state.user.find((item) => item === action.EachUser),

    case "CURRENT_DASHBOARD":
      return {
        TaskList: state.TaskList.filter(
          (item) => item.EachUser === action.EachUser
        ),
      };
    case "FILTER_CURRENTPROFILE":
      const newprofile = {
        ...state,
        userprofile: state.userprofile.filter(
          (item) => item.email === action.userprofile
        ),
      };
      return {
        userprofile: newprofile,
      };
    default:
      return state;
  }
};
export default reducer;
