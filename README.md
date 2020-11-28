# iModah HTML

This is the robust, fully featured React App Artist search demo. The demo allows the visitor to search through node-modules. This README is a continuation of the article - pull down the master branch to complete code.

This is the robust, fully responsive static html assignment/demo. This assignment consisting static html along with the following stuff:
- SCSS
- Bootstrap
- Javascript
- jQuery

## How to run on local

```
# Clone the repository by using the following command
git clone git@github.com:noormuhammaddev/iModah.git

Open index.html file in any browser
```


## SCSS setup

### Step 1 - Gulp installation
```
# Open terminal/cmd
# Check if you have gulp installed on your system
gulp -v

# if gulp already installed you will get the version of gulp

# If gulp installed then go to step 2 otherwise follow the following instructions
npm install gulp -g
```

### Step 2 - SCSS setup
```
# Open directory (iModah) in terminal/cmd
# Run the following command:
cd assets

# Install dependencies
npm install
```

### Step 3 - Compile SCSS
```
# To compile scss files run the following command
gulp sassCompile

# You may check the compiled default.min.css in to the following directory
iModah -> assets -> dist -> css -> default.min.css
```


## General Information
The google recaptcha is not implemented on static html so I did not configure that under contact form section.
