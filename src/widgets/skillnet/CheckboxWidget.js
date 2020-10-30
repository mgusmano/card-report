import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import 'font-awesome/css/font-awesome.css';
import { PeopleAlt } from '@material-ui/icons';

const nodes3 = [{
    value: 'mars',
    label: 'Mars',
    children: [
        { value: 'phobos', label: 'Phobos' },
        { value: 'deimos', label: 'Deimos' },
    ],
}];

const nodes = [{"value":"39806","label":"Integrated SC Mindset","children":[{"value":"39807","label":"Explains Key Enablers to Logistics Networks"},{"value":"39808","label":"Demonstrates Basic Tenets of Zero Loss Philosophy"},{"value":"39809","label":"Identifies Tools and Techniques"},{"value":"39810","label":"Recognizes Qualities that Provide Advantaged Contract Management"}]},{"value":"39811","label":"Business Partnership","children":[{"value":"39812","label":"Explains Customer Strategies"},{"value":"39813","label":"Describes Supply Chain Concepts"},{"value":"39814","label":"Shares Point of View Openly"},{"value":"39815","label":"Defines How Role Enables Org Goals"}]},{"value":"39816","label":"Data & Process Driven Decision Making","children":[{"value":"39817","label":"Describes Data-Based Decision Making"},{"value":"39818","label":"Demonstrates Adherence to Processes"},{"value":"39819","label":"Applies Data Tools"},{"value":"39820","label":"Utilizes Digital Data"}]},{"value":"39821","label":"Initiative Mgmt","children":[{"value":"39822","label":"Establishes Policies and Procedures"},{"value":"39823","label":"Estimates Types and Quantities of Materials"},{"value":"39824","label":"Monitors Status of Project and Product Scope"},{"value":"39825","label":"Collaborates to Keep Project Costs Within Budget"}]},{"value":"39826","label":"Financial Acumen","children":[{"value":"39827","label":"Explains KPIs"},{"value":"39828","label":"Utlizies Supply Chain Metrics to Tell Stories"},{"value":"39829","label":"Demonstrates Budgeting Principles"},{"value":"39830","label":"Demonstrates a Strong Profit and Loss Perspective"}]},{"value":"39831","label":"Strategic Influence","children":[{"value":"39832","label":"Explains Goals in Simple Terms"},{"value":"39833","label":"Negotiates Skillfully"},{"value":"39834","label":"Refers to Broad Range of Ideas"},{"value":"39835","label":"Takes Initiative"}]},{"value":"39836","label":"External Focus","children":[{"value":"39837","label":"Recognizes Market Environment"},{"value":"39838","label":"Gives Examples of Outside Factors that Affect GMI"},{"value":"39839","label":"Accurately Judges New Ideas"},{"value":"39840","label":"Effectively Communicates How Ideas Relate to Business Goals"}]},{"value":"39841","label":"Integrated SC Planning","children":[{"value":"39842","label":"Explains Logistical Strategies"},{"value":"39843","label":"Understands Inventory Strategy"},{"value":"39844","label":"Explains System Rates, Bottlenecks, and Available Days"},{"value":"39845","label":"Translates Projected Demand into Strategy"}]},{"value":"39846","label":"Coaching for Capability Building","children":[{"value":"39847","label":"Designs Practices and Procedures for Autonomous Teams"},{"value":"39848","label":"Shares Expertise As a Teacher"},{"value":"39849","label":"Explains Efficient Work Flows"},{"value":"39850","label":"Demonstrates Commitment to Continuous Improvement"}]},{"value":"39851","label":"Sourcing Skills","children":[{"value":"39852","label":"Supplier relationship management"},{"value":"39853","label":"Supplier risk assessment"},{"value":"39854","label":"Spend analysis"},{"value":"39855","label":"Contracting"},{"value":"39856","label":"Category management"},{"value":"39857","label":"Industry knowledge/market analysis"},{"value":"39858","label":"Purchase order/requisition processing"},{"value":"39859","label":"Market research"},{"value":"39860","label":"Statistical analysis"},{"value":"39861","label":"Commercial management"}]}]


const nodes2 = [{"value":"root","label":"Skills","children":[{"value":"39806","label":"Integrated SC Mindset","children":[{"value":"39807","label":"Explains Key Enablers to Logistics Networks"},{"value":"39808","label":"Demonstrates Basic Tenets of Zero Loss Philosophy"},{"value":"39809","label":"Identifies Tools and Techniques"},{"value":"39810","label":"Recognizes Qualities that Provide Advantaged Contract Management"}]},{"value":"39811","label":"Business Partnership","children":[{"value":"39812","label":"Explains Customer Strategies"},{"value":"39813","label":"Describes Supply Chain Concepts"},{"value":"39814","label":"Shares Point of View Openly"},{"value":"39815","label":"Defines How Role Enables Org Goals"}]},{"value":"39816","label":"Data & Process Driven Decision Making","children":[{"value":"39817","label":"Describes Data-Based Decision Making"},{"value":"39818","label":"Demonstrates Adherence to Processes"},{"value":"39819","label":"Applies Data Tools"},{"value":"39820","label":"Utilizes Digital Data"}]},{"value":"39821","label":"Initiative Mgmt","children":[{"value":"39822","label":"Establishes Policies and Procedures"},{"value":"39823","label":"Estimates Types and Quantities of Materials"},{"value":"39824","label":"Monitors Status of Project and Product Scope"},{"value":"39825","label":"Collaborates to Keep Project Costs Within Budget"}]},{"value":"39826","label":"Financial Acumen","children":[{"value":"39827","label":"Explains KPIs"},{"value":"39828","label":"Utlizies Supply Chain Metrics to Tell Stories"},{"value":"39829","label":"Demonstrates Budgeting Principles"},{"value":"39830","label":"Demonstrates a Strong Profit and Loss Perspective"}]},{"value":"39831","label":"Strategic Influence","children":[{"value":"39832","label":"Explains Goals in Simple Terms"},{"value":"39833","label":"Negotiates Skillfully"},{"value":"39834","label":"Refers to Broad Range of Ideas"},{"value":"39835","label":"Takes Initiative"}]},{"value":"39836","label":"External Focus","children":[{"value":"39837","label":"Recognizes Market Environment"},{"value":"39838","label":"Gives Examples of Outside Factors that Affect GMI"},{"value":"39839","label":"Accurately Judges New Ideas"},{"value":"39840","label":"Effectively Communicates How Ideas Relate to Business Goals"}]},{"value":"39841","label":"Integrated SC Planning","children":[{"value":"39842","label":"Explains Logistical Strategies"},{"value":"39843","label":"Understands Inventory Strategy"},{"value":"39844","label":"Explains System Rates, Bottlenecks, and Available Days"},{"value":"39845","label":"Translates Projected Demand into Strategy"}]},{"value":"39846","label":"Coaching for Capability Building","children":[{"value":"39847","label":"Designs Practices and Procedures for Autonomous Teams"},{"value":"39848","label":"Shares Expertise As a Teacher"},{"value":"39849","label":"Explains Efficient Work Flows"},{"value":"39850","label":"Demonstrates Commitment to Continuous Improvement"}]},{"value":"39851","label":"Sourcing Skills","children":[{"value":"39852","label":"Supplier relationship management"},{"value":"39853","label":"Supplier risk assessment"},{"value":"39854","label":"Spend analysis"},{"value":"39855","label":"Contracting"},{"value":"39856","label":"Category management"},{"value":"39857","label":"Industry knowledge/market analysis"},{"value":"39858","label":"Purchase order/requisition processing"},{"value":"39859","label":"Market research"},{"value":"39860","label":"Statistical analysis"},{"value":"39861","label":"Commercial management"}]}]}]





export default class CheckboxWidget extends React.Component {
    state = {
        checked: [],
        expanded: [],
    };

    render() {
        return (
            <CheckboxTree
            onlyLeafCheckboxes={false}
            showNodeIcon={false}
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => {
                  this.props.onCheck(checked)
                  this.setState({ checked })
                }}
                onCheck2={checked => {
                  console.log(checked)
                  this.setState({ checked })
                }}
                onExpand={expanded => this.setState({ expanded })}
            />
        );
    }
}