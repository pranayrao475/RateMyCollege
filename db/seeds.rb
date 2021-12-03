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
    }
  ])
  puts "🌱 Creating Users..."
  test = User.create(username: "Test", password: "asdf", password_confirmation: "asdf")
  pranay = User.create(username: "Pranay", password: "asdf", password_confirmation: "asdf")
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
        college: colleges.last
    }
  ])
  puts "✅ Done seeding!"