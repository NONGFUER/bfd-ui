import React from 'react'
import Tree from 'c/Tree/Tree'
import SelectTree from 'c/Tree/SelectTree'
import Pre from '../Pre'
import { Props, Prop } from '../Props'

const TreeDemo = React.createClass({
  getInitialState() {
    return {
      data: [{
        name: '数据工厂',
        open: true,
        children: [{
          name: 'adsdsd'
        }, {
          name: 'ioio'
        }, {
          name: 'tutrut',
          children: [{
            name: 'dasd'
          }]
        }]
      }, {
        name: '配置中心',
        children: [{
          name: 'dsads'
        }]
      }, {
        name: '配置中心2'
      }]
    }
  },

  render() {
    return <Tree data={this.state.data} onChange={d => {console.log(d)}} />
  }
})

const TreeDemoCode = `import Tree from 'bfd-ui/lib/Tree/Tree'

const App = React.createClass({
  getInitialState() {
    return {
      data: [{
        name: '数据工厂',
        open: true,
        children: [{
          name: 'adsdsd'
        }, {
          name: 'ioio'
        }, {
          name: 'tutrut',
          children: [{
            name: 'dasd'
          }]
        }]
      }, {
        name: '配置中心',
      }, {
        name: '配置中心2',
        children: [{
          name: 'dsads'
        }]
      }]
    }
  },

  render() {
    return <Tree data={this.state.data} />
  }
})
`

const SelectTreeDemo = React.createClass({
  getInitialState() {
    return {
      data: [{
        name: '数据工厂',
        open: true,
        children: [{
          name: 'adsdsd',
          checked: true
        }]
      }, {
        name: '配置中心',
        children: [{
          name: 'dsads'
        }]
      }, {
        name: '配置中心2'
      }]
    }
  },

  handleChange(data) {
    this.setState({ data })
  },

  render() {
    return <SelectTree data={this.state.data} onChange={this.handleChange} />
  }
})

const SelectTreeDemoCode = `import SelectTree from 'bfd-ui/lib/Tree/SelectTree'

const App = React.createClass({
  getInitialState() {
    return {
      data: [{
        name: '数据工厂',
        open: true,
        children: [{
          name: 'adsdsd',
          checked: true
        }]
      }, {
        name: '配置中心',
        children: [{
          name: 'dsads'
        }]
      }, {
        name: '配置中心2'
      }]
    }
  },

  handleChange(data) {
    this.setState({ data })
  },

  render() {
    return <SelectTree data={this.state.data} onChange={this.handleChange} />
  }
})`

export default () => {
  return (
    <div>
      <h1>树</h1>
      <Pre>{TreeDemoCode}</Pre>
      <TreeDemo />
      <Props>
        <Prop name="data" type="array" required>
          <p>数据源，格式如下</p>
          <Pre>
{`[{
  name: '配置中心', // 显示的字符,
  open: true, // 是否展开，默认不展开就不需要这个字段了
  children: [] //子节点
}]`}
          </Pre>
        </Prop>
        <Prop name="onChange" type="function" required>
          <p>状态改变后的回调，同步树的状态，params: data（整个树状态）, target（目标节点状态）</p>
        </Prop>
      </Props>
      <h1>带选择的树</h1>
      <Pre>{SelectTreeDemoCode}</Pre>
      <SelectTreeDemo />
      <Props>
        <Prop name="data" type="array" required>
          <p>数据源，格式如下</p>
          <Pre>
{`[{
  name: '配置中心', // 显示的字符,
  open: true, // 是否展开，默认不展开就不需要这个字段了
  checked: true, // 是否选中，默认不选中就不需要这个字段了
  children: [] //子节点
}]`}
          </Pre>
        </Prop>
        <Prop name="onChange" type="function" required>
          <p>切换选择后回调，更新树的状态，params: data（整个树状态）, target（目标节点状态）</p>
        </Prop>
      </Props>
    </div>
  )
}