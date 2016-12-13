import {IscrollInfinite,IscrollInfiniteCtrl} from './main';
import './dev.scss';
import $ from 'n-zepto'
// console.log(IscollInfinite,IscollInfiniteCtrl);

class App extends React.Component{
  componentDidMount(){
    this._instnace=IscrollInfiniteCtrl.getInstance('test');
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
  }

  _click(){
    // this._instnace.invoke('scrollTo',0,-100);
  }

  requestData(inPage,inRows){
    var self=this;
    $.ajax({
      url: `http://lab.cubiq.org/iscroll5/demos/infinite/dataset.php?start=${inPage}&count=${inRows}`,
      method: 'GET',
      data: {
        query1: 'value1'
      },
      success:function(data) {
	       self._instnace.invoke('updateCache',inPage, data);
      }
    });
  }

  updateContent(el,data){
    el.innerHTML = data;
  }

  render(){
    return (
      <div className="hello-iscroll">
        <header id="header" onClick={this._click.bind(this)}>
          Header
        </header>
        <IscrollInfinite cssClass="wrapper" delegateHandle="test" iscrollOptions={{
            infiniteElements: '.wrapper-scroller .row',
            dataset:this.requestData.bind(this),
            dataFiller: this.updateContent.bind(this),
		        cacheSize: 1000
          }}>
          <ul>
      			<li  className="row">Pretty row 1</li>
      			<li  className="row">Pretty row 2</li>
      			<li  className="row">Pretty row 3</li>
      			<li  className="row">Pretty row 4</li>
      			<li  className="row">Pretty row 5</li>
      			<li  className="row">Pretty row 6</li>
      			<li  className="row">Pretty row 7</li>
      			<li  className="row">Pretty row 8</li>
      			<li  className="row">Pretty row 9</li>
      			<li  className="row">Pretty row 10</li>
      			<li  className="row">Pretty row 11</li>
      			<li  className="row">Pretty row 12</li>
      			<li  className="row">Pretty row 13</li>
      			<li  className="row">Pretty row 14</li>
      			<li  className="row">Pretty row 15</li>
      			<li  className="row">Pretty row 16</li>
      			<li  className="row">Pretty row 17</li>
      			<li  className="row">Pretty row 18</li>
      			<li  className="row">Pretty row 19</li>
      			<li  className="row">Pretty row 20</li>
      			<li  className="row">Pretty row 21</li>
      			<li  className="row">Pretty row 22</li>
      			<li  className="row">Pretty row 23</li>
      			<li  className="row">Pretty row 24</li>
      			<li  className="row">Pretty row 25</li>
      			<li  className="row">Pretty row 26</li>
      			<li  className="row">Pretty row 27</li>
      			<li  className="row">Pretty row 28</li>
      			<li  className="row">Pretty row 29</li>
      			<li  className="row">Pretty row 30</li>
      			<li  className="row">Pretty row 31</li>
      			<li  className="row">Pretty row 32</li>
      			<li  className="row">Pretty row 33</li>
      			<li  className="row">Pretty row 34</li>
      			<li  className="row">Pretty row 35</li>
      			<li  className="row">Pretty row 36</li>
      			<li  className="row">Pretty row 37</li>
      			<li  className="row">Pretty row 38</li>
      			<li  className="row">Pretty row 39</li>
      			<li  className="row">Pretty row 40</li>
      			<li  className="row">Pretty row 41</li>
      			<li  className="row">Pretty row 42</li>
      			<li  className="row">Pretty row 43</li>
      			<li  className="row">Pretty row 44</li>
      			<li  className="row">Pretty row 45</li>
      			<li  className="row">Pretty row 46</li>
      			<li  className="row">Pretty row 47</li>
      			<li  className="row">Pretty row 48</li>
      			<li  className="row">Pretty row 49</li>
      			<li  className="row">Pretty row 50</li>
      		</ul>
        </IscrollInfinite>
        <footer id="footer">Footer</footer>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
