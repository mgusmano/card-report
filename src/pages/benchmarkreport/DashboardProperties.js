import React from 'react';
//import axios from "axios";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from '@material-ui/core/Tooltip';
import Info from '@material-ui/icons/InfoOutlined';
import Zoom from '@material-ui/core/Zoom';
import Select from "react-select";

import { Grid, Typography } from "@material-ui/core";

import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const DashboardProperties = (props) => {
  const { PartnerName } = props.Partner
  const { classes, state, selectChangeHandler, userSelectChangeHandler, handleRadioChange, userMultiSelectChangeHandler, skillMultiSelectChangeHandler} = props;
  const {
    filterObj,
    labelEBPC,
    labelFunction,
    labelSubFunction,
    labelPosition,
    labelSegment,
    labelFunctionGroup,
    labelLine,
    labelCompetency,
    options,
  } = state;

  let {
    jobBandOption,
    segmentOption,
    subFunctionOption,
    functionOption,
    managerOption,
    locationOption,
    positionOption,
    segementOption,
    lineOption,
    competencyOption,
    userOption,
    skillOption,
    sourceOption,
    coreOption,
    ebOption,
    filterSkillOptions,
    filterUserOptions,
    outputOption,
    themeOption
  } = options;
//console.log(sourceOption)
return (

<React.Fragment>

  <div style={{height:'55px',background:'lightgray',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'24px'}}>FILTERS</div>

  <ExpansionPanel defaultExpanded={false} square classes={{ root: classes.filterPanel, expanded: classes.filterPanelFirstExpanded }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}

            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" className={classes.Panelheading}>Assessment Filter</Typography>
            <Tooltip placement="top" TransitionComponent={Zoom} title="This selection allows you to chose between assessments completed by a manager vs self assessments">
              <Info className={classes.toolTipIcon} />
            </Tooltip>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.filterPanelContent} style={{display:'flex',flexDirection:'column'}}>

          {sourceOption !== null &&
            <Autocomplete

              onChange={(e) => selectChangeHandler(e, "rating")}
              style={{width:'100%',marginTop:'20px'}}

              disableCloseOnSelect={true}
              options={sourceOption}
              //getOptionLabel={(position) => position.JobName}
              getOptionLabel={sourceOptionItem => typeof sourceOptionItem === 'string' ? sourceOptionItem : sourceOptionItem.label}
              //defaultValue=''
              renderOption={(sourceOptionItem, { selected }) => (

                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {sourceOptionItem.label}
                </React.Fragment>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Assessment Source"
                  placeholder=""
                />
              )}
            />
          }



            {/* <div>Assessment Source</div>
            <Select
                  name="rating"
                  value={0}
                  onChange={(e) => selectChangeHandler(e, "rating")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={sourceOption}
                  placeholder="Select Rating Source..."
                  clearable={false}
                /> */}

            {/* <Grid container>
              <Grid item sm={12} md={12} lg={12}>
                <Grid container className={classes.toolTipIconDiv}>
                  <Typography className={classes.slctBoxLabel}>
                    Assessment Source
                </Typography>
                </Grid>

                <Select
                  name="rating"
                  value={0}
                  onChange={(e) => selectChangeHandler(e, "rating")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={sourceOption}
                  placeholder="Select Rating Source..."
                  clearable={false}
                />
              </Grid>
              <Grid item sm={7} md={7} lg={7} />
            </Grid> */}


          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded={false} square classes={{ root: classes.filterPanel, expanded: classes.filterPanelExpanded }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color="primary" className={classes.Panelheading}>User Filter</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className={classes.filterPanelContent}>
            <Grid container >
              <Grid className={classes.radioGroup} item sm={12} md={12} lg={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="isUser"
                    value={filterObj.isUser}
                  >
                    <Grid container spacing={3}>
                      <Grid className={classes.toolTipIconDiv} item sm={12} md={12} lg={12}>
                        <FormControlLabel
                          className={classes.radioBtnLabel}
                          value="filters"
                          control={<Radio color="primary" />}
                          label="Filters"
                          onChange={handleRadioChange}
                        />
                        <Tooltip placement="top" TransitionComponent={Zoom} title='Selecting the "Filters" button will enable data at the Line, Manager, Position and Location level'>
                          <Info className={classes.toolTipIcon} />
                        </Tooltip>
                      </Grid>
                      <Grid className={classes.toolTipIconDiv} item sm={12} md={12} lg={12}>
                        <FormControlLabel
                          className={classes.radioBtnLabel}
                          value="user"
                          control={<Radio color="primary" />}
                          label="Users"
                          onChange={handleRadioChange}
                        />
                        <Tooltip placement="top" TransitionComponent={Zoom} title='Selecting the "Users" radio button will enable data at the individual level only'>
                          <Info className={classes.toolTipIcon} />
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid hidden={true} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>{labelEBPC}</Typography>
                <Select
                  name="is_eb"
                  value={filterObj.is_eb}
                  onChange={(e) => userSelectChangeHandler(e, "is_eb")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={ebOption}
                  placeholder={`Select ${labelEBPC}...`}
                  clearable
                  disabled={filterObj.isUser === "user" ? true : false}
                />
              </Grid>

              {/* jobBandOption,
      segmentOption,
      subFunctionOption,
      functionOption, */}

      {PartnerName === 'General Mills' &&

<>
              <Grid item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>{labelFunction}</Typography>
                <Select
                  name="function"
                  multi={true}
                  value={filterObj.function}
                  onChange={(e) => userSelectChangeHandler(e, "function")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={functionOption}
                  placeholder={`Select Function...`}
                  clearable
                  disabled={filterObj.isUser === "user" ? true : false}
                />
              </Grid>




              <Grid item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>{labelSubFunction}</Typography>
                <Select
                  name="sub_function"
                  multi={true}
                  value={filterObj.sub_function}
                  onChange={(e) => userSelectChangeHandler(e, "sub_function")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={subFunctionOption}
                  placeholder={`Select Sub-Function...`}
                  clearable
                  disabled={filterObj.isUser === "user" ? true : false}
                />
              </Grid>



              <Grid item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>Segment</Typography>
                <Select
                  name="segment"
                  multi={true}
                  value={filterObj.segment}
                  onChange={(e) => userSelectChangeHandler(e, "segment")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={segmentOption}
                  placeholder={`Select ${labelSegment}...`}
                  clearable
                  disabled={filterObj.isUser === "user" ? true : false}
                />
              </Grid>
              </>

    }

              <Grid xclassName={classes.selectBoxContainer} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                  Manager
                </Typography>
                <Select
                  name="manager_name"
                  multi={true}
                  value={filterObj.manager_name}
                  onChange={(e) => userSelectChangeHandler(e, "manager_name")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={managerOption}
                  placeholder="Select Manager..."
                  clearable={false}
                  disabled={filterObj.isUser === "user" ? true : false}
                />
              </Grid>
              <Grid xclassName={classes.selectBoxContainer} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                  {labelPosition}
                </Typography>
                <Select
                  name="position_id"
                  multi={true}
                  value={filterObj.position_id}
                  onChange={(e) => userSelectChangeHandler(e, "position_id")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={positionOption}
                  placeholder={`Select ${labelPosition}...`}
                  clearable={false}
                  disabled={filterObj.isUser === "user" ? true : false}
                />
              </Grid>

              <Grid xclassName={classes.filterDiv} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                  Location
                </Typography>
                <Select
                  name="geo_location"
                  multi={true}
                  value={filterObj.geo_location}
                  onChange={(e) => userSelectChangeHandler(e, "geo_location")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={locationOption}
                  placeholder="Select Location..."
                  clearable={false}
                  disabled={filterObj.isUser === "user" ? true : false}
                />
              </Grid>


              <Grid xclassName={classes.filterDiv} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                  Filtered Users
                </Typography>
                <Select
                  name="filterUser"
                  value={filterObj.filterUser}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={filterUserOptions}
                  placeholder="Filtered Users List..."
                  clearable={false}
                  disabled={filterObj.isUser === "user" ? true : false}
                />
              </Grid>

              <Grid xclassName={classes.filterDiv} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>User</Typography>
                <Select
                  multi={true}
                  name="userIds"
                  value={filterObj.userIds}
                  defaultValue=""
                  onChange={userMultiSelectChangeHandler}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  options={[...userOption]}
                  placeholder="User List"
                  clearable={false}
                  disabled={filterObj.isUser === "filters" ? true : false}
                />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded={false} square classes={{ root: classes.filterPanel, expanded: classes.filterPanelExpanded }}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography color="primary" className={classes.Panelheading}>Skill Filter</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.filterPanelContent}>
            <Grid container>

              <Grid className={classes.radioGroup} item sm={12} md={12} lg={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="isSkill"
                    value={filterObj.isSkill}
                  >
                    <Grid container spacing={3}>
                      <Grid className={classes.toolTipIconDiv} item sm={12} md={12} lg={12}>
                        <FormControlLabel
                          className={classes.radioBtnLabel}
                          value="filters"
                          control={
                            <Radio
                              color="primary"
                              onChange={handleRadioChange}
                            />
                          }
                          label="Filters"
                        />
                        <Tooltip placement="top" TransitionComponent={Zoom} title='Selecting the "Filters" radio button will enable data at the Line, Segment, and Competency level'>
                          <Info className={classes.toolTipIcon} />
                        </Tooltip>
                      </Grid>
                      <Grid className={classes.toolTipIconDiv} item sm={12} md={12} lg={12}>
                        <FormControlLabel
                          className={classes.radioBtnLabel}
                          value="skill"
                          control={
                            <Radio
                              color="primary"
                              onChange={handleRadioChange}
                            />
                          }
                          label="Skills"
                        />
                        <Tooltip placement="top" TransitionComponent={Zoom} title='Selecting the "Skills" button will enable data at the skill level only'>
                          <Info className={classes.toolTipIcon} />
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item sm={12} md={12} lg={12}>

                {/* <Typography className={classes.slctBoxLabel}>
                  Core/Segment
                </Typography>
                <Select
                  name="is_core"
                  value={filterObj.is_core}
                  onChange={(e) => this.skillSelectChangeHandler(e, "is_core")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={coreOption}
                  placeholder="Select Core/Segment..."
                  clearable
                  disabled={filterObj.isSkill === "skill" ? true : false}
                /> */}

              </Grid>

              <Grid xclassName={classes.selectBoxContainer} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                  {labelFunctionGroup}
                </Typography>
                <Select
                  name="segement"
                  multi={true}
                  value={filterObj.segement}
                  onChange={(e) => this.skillSelectChangeHandler(e, "segement")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={segementOption}
                  placeholder={`Select ${labelFunctionGroup}...`}
                  clearable={false}
                  disabled={filterObj.isSkill === "skill" ? true : false}
                />
              </Grid>

              <Grid xclassName={classes.selectBoxContainer} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>{labelLine}</Typography>
                <Select
                  name="line"
                  multi={true}
                  value={filterObj.line}
                  onChange={(e) => this.skillSelectChangeHandler(e, "line")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={lineOption}
                  placeholder={`Select ${labelLine}...`}
                  clearable={false}
                  disabled={filterObj.isSkill === "skill" ? true : false}
                />
                <Grid item sm={12} md={12} lg={12} />
              </Grid>
              <Grid xclassName={classes.selectBoxContainer} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                {labelCompetency}
                </Typography>
                <Select
                  name="competency"
                  multi={true}
                  value={filterObj.competency}
                  onChange={(e) => this.skillSelectChangeHandler(e, "competency")}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={competencyOption}
                  placeholder={`Select ${labelCompetency}...`}
                  clearable={false}
                  disabled={filterObj.isSkill === "skill" ? true : false}
                />
              </Grid>

              <Grid className={classes.filterDiv} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>
                  Filtered Skill
                </Typography>
                <Select
                  name="filterSkill"
                  value={filterObj.filterSkill}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  removeSelected
                  options={filterSkillOptions}
                  placeholder="Filtered Skill List..."
                  clearable={false}
                  disabled={filterObj.isSkill === "skill" ? true : false}
                />
              </Grid>

              <Grid className={classes.filterDiv} item sm={12} md={12} lg={12}>
                <Typography className={classes.slctBoxLabel}>Skill</Typography>
                <Select
                  multi={true}
                  name="skillIds"
                  value={filterObj.skillIds}
                  defaultValue=""
                  onChange={skillMultiSelectChangeHandler}
                  className="search-select"
                  optionalClassName="form-select-option"
                  searchable
                  options={[...skillOption]}
                  placeholder="Select Skills..."
                  clearable={false}
                  disabled={filterObj.isSkill === "filters" ? true : false}
                />
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        </React.Fragment>


)

}

export default DashboardProperties