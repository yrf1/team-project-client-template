import React from 'react';
import {submitItem} from '../../server';


export default class SUBMISSIONFORMBODY extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        value: "",
        title: "",
        price: "",
        condition: "",
        conDesc: "",
        category: "",
        categoryDescription: "",
        categoryDescription01: "",
        categoryDescription02: "",
        categoryDescription03: "",
        categoryDescription04: "",
        categoryDescription05: "",
        categoryDescription06: ""
      };
    }


    save(){
    console.log(this.state.categoryDescription + "=catdesc4");
        submitItem(this.state);
    }
    /**
     * Called when the user clicks the 'post' button.
     * Triggers the `onPost` prop if the post isn't empty, and clears
     * the component.
     */
      handleSaveClick(clickEvent){
        clickEvent.preventDefault();
        console.log(this.state.categoryDescription01);
        if (this.state.categoryDescription01 != ""){
          console.log(this.state.categoryDescription + "=catdesc");
          this.setState({categoryDescription: this.state.categoryDescription01}, () => {console.log(this.state)});
          console.log(this.state.categoryDescription + "=catdesc2");
        }
        if (this.state.categoryDescription02 != ""){
          if (this.state.categoryDescription != ""){this.setState({categoryDescription: this.state.categoryDescription + " || " + this.state.categoryDescription02});  }
          else {this.setState({categoryDescription: this.state.categoryDescription02});}
        }
        if (this.state.categoryDescription03 != ""){
          if (this.state.categoryDescription != ""){this.setState({categoryDescription: this.state.categoryDescription + " || " + this.state.categoryDescription03});  }
          else {this.setState({categoryDescription: this.state.categoryDescription03});}
        }
        if (this.state.categoryDescription04 != ""){
          if (this.state.categoryDescription != ""){this.setState({categoryDescription: this.state.categoryDescription + " || " + this.state.categoryDescription04});  }
          else {this.setState({categoryDescription: this.state.categoryDescription04});}
        }
        if (this.state.categoryDescription05 != ""){
          if (this.state.categoryDescription != ""){this.setState({categoryDescription: this.state.categoryDescription + " || " + this.state.categoryDescription05});  }
          else {this.setState({categoryDescription: this.state.categoryDescription05});}
        }
        if (this.state.categoryDescription06 != ""){
          if (this.state.categoryDescription != ""){this.setState({categoryDescription: this.state.categoryDescription + " || " + this.state.categoryDescription06});  }
          else {this.setState({categoryDescription: this.state.categoryDescription06});}
        }
        if (this.state.title.trim() != ""){
          if (clickEvent.button == 0){
            this.setState({}, this.save);

          }
        }
      }
        // submitItem(userID, title, price, condition, conditionDescription, category, categoryDescription, photoRef, cb)
        //submitItem(1, title_, title_, title_, title_, title_, title_);

    handleChange(e) {
      // Prevent the event from "bubbling" up the DOM tree.
      e.preventDefault();
      if (e.target.id == "titleInput"){
        this.setState({title: e.target.value});
      }
      if (e.target.id == "priceInput"){
        this.setState({price: e.target.value});
      }
      if (e.target.id == "conditionSelect"){
        this.setState({condition: e.target.value});
      }
      if (e.target.id == "conditionTextarea"){
        this.setState({conDesc: e.target.value});
      }
      if (e.target.id == "Textbook"){
        this.setState({category: this.state.category + e.target.value});
      }
      if (e.target.id == "Clothing"){
        this.setState({category: this.state.category + e.target.value});
      }
      if (e.target.id == "Tech"){
        this.setState({category: this.state.category + e.target.value});
      }
      if (e.target.id == "Events"){
        this.setState({category: this.state.category + e.target.value});
      }
      if (e.target.id == "Furniture"){
        this.setState({category: this.state.category + e.target.value});
      }
      if (e.target.id == "Miscellaneous"){
        this.setState({category: this.state.category + e.target.value});
      }
      if (e.target.id == "textbookTextarea"){
        this.setState({categoryDescription01: e.target.value});
        console.log(this.state.categoryDescription01);
      }
      if (e.target.id == "clothingTextarea"){
        this.setState({categoryDescription02: e.target.value});
      }
      if (e.target.id == "eventTextarea"){
        this.setState({categoryDescription03: e.target.value});
      }
      if (e.target.id == "techTextarea"){
        this.setState({categoryDescription04: e.target.value});
      }
      if (e.target.id == "furnitureTextarea"){
        this.setState({categoryDescription05: e.target.value});
      }
      if (e.target.id == "miscTextarea"){
        this.setState({categoryDescription06: e.target.value});
      }
    }

  render() {
    return (
      <div className = "container content-contain">
        {/*<!-- Start Heading -->*/}
        <div className="row">
            <div className="col-md-12">
                <h1 className="page-header">Submit an Item for Sale</h1>
            </div>
        </div>
        {/*<!-- End Heading -->*/}

        <div className = "row bottom">

          <form>
            {/*<!--- Start Left Side --->*/}

              <div className = "col-md-4 sp42 left-column">

                {/*<!--- Start Upload Picture --->*/}
                    <img className = "photo-entry main-photo" src="img/war_peace2.jpg" width="100%"/>

                    <div className="photo-entry center">
                      <label htmlFor="photoUpload1">Upload Photo</label>
                      <input type="file" className="form-control-file" id="photoUpload1" aria-describedby="fileHelp"/>
                    </div>

                    <label htmlFor="photoUpload2">OR drag and drop files below:</label>
                    <div className="upload-drop-zone" id="photoUpload2">
                      Just drag and drop files here
                    </div>
                  {/*  <!--- End Upload Picture --->*/}

                  {/*  <!--- Start Main Submission Criteria --->*/}
                    <div className="form-group">
                      <label htmlFor="titleInput">Title</label>
                      <input type="text" className="form-control" id="titleInput" placeholder="ex. War and Peace"
                        value={this.state.title} onChange={(e) => this.handleChange(e)} />
                    </div>

                    <label htmlFor="costInput">Cost</label>
                      <div className="input-group form-entry">
                        <div className="input-group-addon">$</div>
                        <input type="number" min = "0" step = "0.01" className="form-control" id="priceInput" placeholder="150.00"
                          value={this.state.price} onChange={(e) => this.handleChange(e)} />
                      </div>

                    <div className = "photo-entry">
                      <label htmlFor="conditionSelect">Condition</label>
                      <select className="form-control" id="conditionSelect" value={this.state.condition} onChange={(e) => this.handleChange(e)} >
                        <option selected>Choose...</option>
                        <option>New</option>
                        <option>Like New</option>
                        <option>Good Enough</option>
                        <option>Visibly Used</option>
                        <option>Poor</option>
                      </select>
                    </div>
                    <div className="form-group form-entry">
                      <label className = "sr-only" htmlFor="conditionTextarea">Condition Description</label>
                      <textarea className="form-control textarea" id="conditionTextarea" rows="3" placeholder = "Describe the item's condition here... ex: Has light scratch marks."
                        value={this.state.conDesc} onChange={(e) => this.handleChange(e)} />
                    </div>
                    {/*<!--- End Main Submission Criteria --->*/}

                    {/*<!--- Start Submit Button --->*/}
                    <div className="form-group row">
                      <div className="col-md-3 sp24"></div>
                      <div className="col-md-3">
                        <button type="submit" className="btn btn-primary" onClick={(e) => this.handleSaveClick(e)}>Post for Sale</button>
                      </div>
                    </div>
                    {/*<!--- End Submit Button --->*/}


              </div>
            {/*<!--- End Left Side --->*/}


          {/*<!--- Start Right Side --->*/}

              <div className = "col-md-7" htmlStyle="padding-bottom: 50px;">

                {/*<!--- Start Class Related --->*/}
                  <div className = "form-check form-check-inline top">
                      <label className = "sp8">Is this item class-related?</label>
                      <label className="form-check-label sp8" htmlFor = "classRelated">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="radioYes" value="option1"/> Yes
                      </label>
                      <label className="form-check-label sp50" htmlFor = "classRelated">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="radioNo" value="option2"/> No
                      </label>
                  </div>
                  <div className = "form-group-row">
                    <label className = "sp8" htmlFor="courseSelect">Course Subject:</label>
                    <select className="custom-select sp16" id="subjectSelect">
                      <option selected>Choose...</option>
                      <option value="1">Accounting</option>
                      <option value="2">Aerospace Studies</option>
                      <option value="3">Animal Science</option>
                      <option value="4">Anthropology</option>
                      <option value="5">Arabic</option>
                      <option value="6">Community Health (see PUBHLTH)</option>
                    </select>
                    <label className = "sp8" htmlFor="courseSelect">Course Number:</label> {/*}<!--- Note: This does not allow for course number that include letters like 197U. Search criteria should simply be 197 in this example --->*/}
                    <div className="pull-right right">
                      <input type="number" min = "0" step = "1" className="custom-select narrow" id="courseNumber" placeholder="000"/>
                    </div>
                    <h1 className="page-header"></h1>
                  </div>
                {/*<!--- End Class Related --->*/}

                {/*<!--- Start Category Select --->*/}
                <div className = "col-md-12" htmlStyle = "padding-top: 15px;">
                  <h3 htmlStyle ="margin-bottom: 25px;">Select Applicable Categories</h3>
                  {/*<!--- Start Textbook --->*/}
                  <label className="form-check-label categoryEntry" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Textbook" value={this.state.text} onChange={(e) => this.handleChange(e)} /> Textbook
                  </label>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <label htmlStyle ="padding-left: 15px;">Author:</label>
                        </div>
                        <div className="col-md-9 pull-right">
                          <input type="text" className = "form-control thin" placeholder="ex. Leo Tolstoy" />
                        </div>
                      </div>
                      <div className="row" htmlStyle ="padding-top:4px;">
                        <div className="col-md-3">
                          <label htmlStyle ="padding-left: 15px;">Edition:</label>
                        </div>
                        <div className="col-md-9">
                          <input type="number" className = "form-control thin" placeholder="00" />
                        </div>
                      </div>
                    <div className = "form-check form-check-inline" htmlStyle ="padding-left: 15px; padding-top: 4px;">
                        <label className="form-check-label sp16">
                          <input className="form-check-input" type="radio" name="bookCoverOptions" id="hard" value="option1"/> Hardcover
                        </label>
                        <label className="form-check-label">
                          <input className="form-check-input" type="radio" name="bookCoverOptions" id="paper" value="option2"/> Paperback
                        </label>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                      <textarea className="form-control textarea" id="textbookTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.textbookDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>
                  </div>
                  {/*<!--- End Textbook --->*/}
                  <hr />
                  {/*<!--- Start Clothing --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Clothing" value={this.state.text} onChange={(e) => this.handleChange(e)}/> Clothing
                  </label>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <label htmlStyle ="padding-left: 15px;">Size:</label>
                        </div>
                        <div className="col-md-4">
                          <select className="custom-select">
                            <option selected>Choose...</option>
                            <option value="1">Small</option>
                            <option value="2">Medium</option>
                            <option value="3">Large</option>
                          </select>
                        </div>
                        <div className="col-md-2">
                          <label htmlStyle ="padding-left: 5px;">OR</label>
                        </div>
                        <div className="col-md-4">
                          <input type="number" className = "form-control thin" placeholder="00" />
                        </div>
                      </div>
                      <div className="row" htmlStyle ="padding-top:4px;">
                        <div className="col-md-2">
                          <label htmlStyle ="padding-left: 20px;">OR</label>
                        </div>
                        <div className="col-md-10">
                          <input type="text" className = "form-control thin" placeholder="ex. 32 waist, 32 length" />
                        </div>
                      </div>
                    <div className = "form-check form-check-inline" htmlStyle ="padding-left: 15px; padding-top: 4px;">
                        <label className="form-check-label sp12">
                          <input className="form-check-input" type="checkbox" name="clothingOptions" id="adult" value="option1"/> Adult
                        </label>
                        <label className="form-check-label sp42">
                          <input className="form-check-input" type="checkbox" name="clothingOptions" id="child" value="option2"/> Child
                        </label>
                        <label className="form-check-label sp12">
                          <input className="form-check-input" type="checkbox" name="clothingOptions" id="mens" value="option2"/> Mens
                        </label>
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" name="clothingOptions" id="womens" value="option2"/> Womens
                        </label>
                    </div>
                    </div>
                    <div className="col-md-6">
                      <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                      <textarea className="form-control textarea" id="clothingTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.clothingDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>
                  </div>
                  {/*<!--- End Clothing --->*/}
                  <hr />
                  {/*<!--- Start Tech --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Tech" value={this.state.text} onChange={(e) => this.handleChange(e)}/> Tech
                  </label>
                    <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                    <div className="left">
                      <textarea className="form-control textarea" id="techTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.techDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>
                  {/*<!--- End Tech --->*/}
                  <hr />
                  {/*<!--- Start Events --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Events" value={this.state.text} onChange={(e) => this.handleChange(e)}/> Events
                  </label>
                    <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                    <div className="left">
                      <textarea className="form-control textarea" id="eventTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.eventsDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>
                {/*<!--- End Events --->*/}
                  <hr />
                  {/*<!--- Start Furniture --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Furniture"  value={this.state.text} onChange={(e) => this.handleChange(e)}/> Furniture
                  </label>
                    <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                    <div className="left">
                      <textarea className="form-control textarea" id="furnitureTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.furnitureDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>
                {/*<!--- End Furniture --->*/}
                  <hr />
                  {/*<!--- Start Misc --->*/}
                  <label className="form-check-label" htmlStyle ="font-size: 20px;" htmlFor = "categorySelect">
                    <input className="form-check-input" type="checkbox" name="categoryOptions" id="Miscellaneous" value={this.state.text} onChange={(e) => this.handleChange(e)}/> Miscellaneous
                  </label>
                  <div className="left">
                    <label className = "sr-only" htmlFor="categoryTextarea">Condition Description</label>
                      <textarea className="form-control textarea" id="miscTextarea" rows="3" placeholder = "Describe the item here..." value={this.state.miscDesc} onChange={(e) => this.handleChange(e)} ></textarea>
                    </div>
                {/*<!--- End Misc --->*/}
                </div>

              </div>

          </form>

        </div>
      </div>


    )
  }
}
