# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Creating Colleges..."
colleges = College.create([
  { 
    name: "Hudson County Community College",
    image_url: "https://s3.amazonaws.com/libapps/accounts/3054/images/HCCC_OFFICIAL_Logo_color_reversed.jpg"
  },
    { 
      name: "Flatiron School",
      image_url: "https://mma.prnewswire.com/media/1488233/Flatiron_Primary__Logo_Blue_highres_Logo.jpg?p=facebook"
    }, 
    { 
      name: "Princeton University",
      image_url: "https://www.symbols.com/images/symbol/1274_princeton-university-seal.png"
    },
    { 
      name: "Columbia University",
      image_url: "https://logos-world.net/wp-content/uploads/2020/06/Columbia-Lions-Logo-2006-Present.jpg"
    },
    { 
      name: "Harvard University",
      image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png" 
    }, 
    { 
      name: "Massachusetts Institute of Technology",
      image_url: "https://logos-world.net/wp-content/uploads/2021/09/MIT-Symbol.png" 
    }, 
    { 
      name: "Yale University",
      image_url: "https://m.media-amazon.com/images/I/51GwF88fE1L._AC_UL1024_.jpg" 
    }, 
    { 
      name: "Stanford University",
      image_url: "https://1000logos.net/wp-content/uploads/2018/02/Stanford-University-Logo.jpg" 
    }, 
    { 
      name: "Rutgers University",
      image_url: "https://1000logos.net/wp-content/uploads/2017/08/Rutgers-University-Emblem.jpg"
    }, 
    { 
      name: "Penn State University",
      image_url: "https://1000logos.net/wp-content/uploads/2017/11/penn-state-logo-768x563.png"
    }, 
    { 
      name: "Duke University",
      image_url: "https://1000logos.net/wp-content/uploads/2017/11/Duke-University-Logo-768x532.png"
    }, 
    { 
      name: "Michigan State University",
      image_url: "https://1000logos.net/wp-content/uploads/2017/10/michigan-state-university-logo.jpg"
    }, 
    { 
      name: "Ohio State University",
      image_url: "https://1000logos.net/wp-content/uploads/2018/01/Ohio-State-Logo-768x432.png"
    }, 
    { 
      name: "University of Arizona",
      image_url: "https://1000logos.net/wp-content/uploads/2017/07/University-of-Arizona-Logo-768x706.png"
    }, 
    { 
      name: "Texas Tech University",
      image_url: "https://1000logos.net/wp-content/uploads/2017/08/texas-tech-university-logo-768x494.jpg"
    }, 
    { 
      name: "University of Georgia",
      image_url: "https://1000logos.net/wp-content/uploads/2017/12/university-of-georgia-logo-768x432.png"
    }
  ])
  # puts "🌱 Creating Users..."
  # test = User.create(username: "Test", password: "asdf", password_confirmation: "asdf")
  # pranay = User.create(username: "Pranay", password: "asdf", password_confirmation: "asdf")
puts "🌱 Creating Reviews..."
  reviews = Review.create([
    {
        title: "Great University",
        description: "Realy Great college.",
        score: 5,
        college: colleges.first
    }, 
    {
        title: "Great University",
        description: "Realy Great college.",
        score: 5,
        college: colleges.second
    },
    {
      title: "Great University",
      description: "Realy Great college.",
      score: 5,
      college: colleges.third
  }, 
  {
      title: "Great University",
      description: "Realy Great college.",
      score: 5,
      college: colleges.last
  },
  {
    title: "Great University",
    description: "Realy Great college.",
    score: 5,
    college: colleges.fourth
}, 
{
    title: "Great University",
    description: "Realy Great college.",
    score: 5,
    college: colleges.last
}
  ])
  puts "✅ Done seeding!"