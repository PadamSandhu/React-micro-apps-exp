import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add, remove } from '../../store/actions';
import SumWidget from '../../Components/sum-widget';

export const SumWidgetWrapper = (props) => {
  const { actions, count } = props;
  const { add, remove } = actions;

  return (
    <SumWidget
      addNumber={add}
      removeNumber={remove}
      title={'Add/Remove Title'}
      count={count}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return { count: state.sum.count };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ add, remove }, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SumWidgetWrapper);
