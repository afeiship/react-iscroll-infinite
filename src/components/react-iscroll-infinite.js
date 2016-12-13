import './style.scss';
import IScroll from 'iscroll/build/iscroll-infinite';
import classNames from 'classnames';


let instanceMap = {};
/*
iscroll-infinite.js
 can do infinite and cached scrolling.
 Handling very long lists of elements is no easy task for mobile devices.
 iScroll infinite uses a caching mechanism that lets you scroll a potentially infinite number of elements.
*/

class IscollInfinite extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string,
    delegateHandle:React.PropTypes.string,
    iscrollOptions:React.PropTypes.object
  };

  static defaultProps = {
    cssClass:'wrapper',
    delegateHandle:'',
    iscrollOptions:{}
  };

  static createIscroll(inProps){
    return new IScroll(`.${inProps.cssClass}`, inProps.iscrollOptions);
  }

  static getInstance(inHandle){
    return instanceMap[inHandle];
  }
  constructor(inProps){
    super(inProps);
    instanceMap[inProps.delegateHandle] = this;
  }

  componentDidMount(){
    this._iscroll = IscollInfinite.createIscroll(this.props);
  }

  invoke(inName){
    var args = [].slice.call(arguments, 1);
    return this._iscroll[inName].apply(this._iscroll, args);
  }

  render(){
    return (
      <div data-delegate-handle={this.props.delegateHandle} className={classNames('react-iscroll-infinite-wrapper',this.props.cssClass)}>
        <div className={classNames('react-iscroll-infinite-scroller',`${this.props.cssClass}-scroller`)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default IscollInfinite;
