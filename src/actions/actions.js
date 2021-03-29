let nextid = 0;

export function testAction(test) {
  //console.log(test);
  return function(dispatch){
    console.log("If you see me, I must've gotten dispatched from the Redux-Thunk middleware");
    dispatch({
    
      type: "TEST_INPUT",
      id: nextid++,
      payload: test,
      completed: false
    });
  }
}
export function completeTask(id) {
  //console.log(id);
  return {
    type: "COMPLETE_TASK",
    id: id
  };
}
