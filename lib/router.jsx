FlowRouter.route('/tickets', {
  action(){
    ReactLayout.render(TicketsLayout);
  }
});
FlowRouter.route('/ranges', {
  action(){
    ReactLayout.render(RangesLayout);
  }
});
FlowRouter.route('/admins', {
  action(){
    ReactLayout.render(AdminsLayout);
  }
});
