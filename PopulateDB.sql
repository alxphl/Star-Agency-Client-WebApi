USE [StarAgency7]
GO
SET IDENTITY_INSERT [dbo].[Actors] ON 

INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (1, N'Al Pacino', N'Alfredo James "Al" Pacino is an American actor and filmmaker. Pacino has had a career spanning more than five decades, during which time he has received numerous accolades and honors.', N'm', N'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg')
INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (2, N'Angelina Jolie', N'Angelina Jolie is an American actress, filmmaker, and humanitarian. She has received an Academy Award, two Screen Actors Guild Awards, and three Golden Globe Awards. She has also been cited as Hollywood''s highest-paid actress.
Jolie''s starring role as the video game heroine Lara Croft in Lara Croft', N'f', N'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/220px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg')
INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (3, N'Emma Watson', N'Emma Charlotte Duerre Watson is a British actress, model, and activist. Born in Paris and brought up in Oxfordshire, Watson attended the Dragon School as a child and trained as an actress at the Oxford branch of Stagecoach Theatre Arts.', N'f', N'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/220px-Emma_Watson_2013.jpg')
INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (4, N'Jennifer Lawrence', N'Jennifer Shrader Lawrence is an American actress. Lawrence began her career in television, playing her first major role as a main cast member on the TBS sitcom The Bill Engvall Show.', N'f', N'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg')
INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (5, N'Johnny Depp', N'John Christopher "Johnny" Depp II is an American actor, producer, and musician. He has won the Golden Globe Award and Screen Actors Guild Award for Best Actor.
His role in a movie is often rather big. His character is often on the "loopy side" and his character being in a darker state of mind, etc.', N'm', N'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JohnnyDepp2018.jpg/220px-JohnnyDepp2018.jpg')
INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (6, N'Leonardo DiCaprio', N'Leonardo Wilhelm DiCaprio is an American actor and film producer. DiCaprio began his career by appearing in television commercials in the late 1980s.', N'm', N'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg')
INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (8, N'Morgan Freeman', N'Morgan Freeman (born June 1, 1937) is an American actor and narrator. Freeman won an Academy Award in 2005 for Best Supporting Actor with Million Dollar Baby (2004), and he has received Oscar nominations for his performances in Street Smart (1987), Driving Miss Daisy, The Shawshank Redemption and Invictus.', N'm', N'https://m.media-amazon.com/images/M/MV5BMTc0MDMyMzI2OF5BMl5BanBnXkFtZTcwMzM2OTk1MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg')
INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (9, N'Natalie Portman', N'Natalie Portman is an actress, film producer and film director with dual American and Israeli citizenship. Portman is best known for her roles as Padme Amidala in the Star Wars prequel trilogy and Nina Sayers in Black Swan. She won an Academy Award, a Golden Globe Award, and a Screen Actors Guild Award, among other accolades, for her performance in the latter.', N'f', N'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg/220px-Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg')
INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (10, N'Robert De Niro', N'Robert Anthony De Niro Jr. is an American actor, producer, and director. De Niro was cast as the young Vito Corleone in the 1974 film The Godfather Part II, for which he won the Academy Award for Best Supporting Actor.', N'm', N'https://m.media-amazon.com/images/M/MV5BMjAwNDU3MzcyOV5BMl5BanBnXkFtZTcwMjc0MTIxMw@@._V1_UY317_CR13,0,214,317_AL_.jpg')
INSERT [dbo].[Actors] ([Id], [Name], [Biography], [Gender], [ImagePath]) VALUES (11, N'Scarlett Johansson', N'Scarlett Johansson (born November 22, 1984) is an American actress, model, and singer. She made her film debut in North.
Johansson is considered one of Hollywood''s modern sex symbols, and has frequently appeared in published lists of the sexiest women in the world. As of February 2017, she is the highest-grossing actress of all time in North America, with her films making over $3.6 billion.', N'f', N'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Scarlett_Johansson_in_Kuwait_01b-tweaked.jpg/220px-Scarlett_Johansson_in_Kuwait_01b-tweaked.jpg')
SET IDENTITY_INSERT [dbo].[Actors] OFF
SET IDENTITY_INSERT [dbo].[Movies] ON 

INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (1, N'https://www.imdb.com/title/tt0411061/?ref_=nm_flmg_act_22', 1, 2007, N'88 Minutes')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (2, N'https://www.imdb.com/title/tt0106519/?ref_=nm_flmg_act_39', 1, 1993, N'Carlito''s Way ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (3, N'https://www.imdb.com/title/tt2893490/?ref_=nm_flmg_act_11', 1, 2014, N'Manglehorn')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (4, N'https://www.imdb.com/title/tt0496806/?ref_=nm_flmg_act_21', 1, 2007, N'Ocean''s Thirteen')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (5, N'https://www.imdb.com/title/tt0274711/?ref_=nm_flmg_act_28', 1, 2002, N'People I Know')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (6, N'https://www.imdb.com/title/tt1034331/?ref_=nm_flmg_act_20', 1, 2008, N'Righteous Kill')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (7, N'https://www.imdb.com/title/tt0086250/?ref_=nm_flmg_act_48', 1, 1983, N'Scarface')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (8, N'https://www.imdb.com/title/tt0105323/?ref_=nm_flmg_act_40', 1, 1992, N'Scent of a Woman ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (10, N'https://www.imdb.com/title/tt0068646/?ref_=nm_flmg_act_58', 1, 1972, N'The Godfather ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (11, N'https://www.imdb.com/title/tt0417217/?ref_=nm_flmg_act_23', 1, 2005, N'Two for the Money')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (12, N'https://www.imdb.com/title/tt0442933/?ref_=nm_flmg_act_17', 2, 2007, N'Beowulf')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (13, N'https://www.imdb.com/title/tt3707106/?ref_=nm_flmg_act_7', 2, 2015, N'By The Sea')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (15, N'https://www.imdb.com/title/tt0113243/?ref_=nm_flmg_act_47', 2, 1995, N'Hackers')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (16, N'https://www.imdb.com/title/tt0146316/?ref_=nm_flmg_act_31', 2, 2001, N'Lara Croft Tomb Raider ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (17, N'https://www.imdb.com/title/tt1587310/?ref_=nm_flmg_act_8', 2, 2014, N'Maleficent')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (18, N'https://www.imdb.com/title/tt0356910/?ref_=nm_flmg_act_20', 2, 2005, N'Mr. & Mrs. Smith ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (19, N'https://www.imdb.com/title/tt0944835/?ref_=nm_flmg_act_13', 2, 2010, N'Salt')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (20, N'https://www.imdb.com/title/tt0343737/?ref_=nm_flmg_act_19', 2, 2006, N'The Good Shepherd')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (21, N'https://www.imdb.com/title/tt1243957/?ref_=nm_flmg_act_11', 2, 2010, N'The Tourist ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (22, N'https://www.imdb.com/title/tt0493464/?ref_=nm_flmg_act_14', 2, 2008, N'Wanted')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (24, N'https://www.imdb.com/title/tt2771200/?ref_=nm_flmg_act_3', 3, 2017, N'Beauty and the Beast')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (25, N'https://www.imdb.com/title/tt0295297/?ref_=nm_flmg_act_21', 3, 2002, N'Harry Potter and the Chamber of Secrets ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (27, N'https://www.imdb.com/title/tt0417741/?ref_=nm_flmg_act_15', 3, 2009, N'Harry Potter and the Half-Blood Prince ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (28, N'https://www.imdb.com/title/tt0241527/?ref_=nm_flmg_act_22', 3, 2001, N'Harry Potter and the Sorcerer''s Stone')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (29, N'https://www.imdb.com/title/tt1655420/?ref_=nm_flmg_act_11', 3, 2011, N'My Week with Marilyn')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (30, N'https://www.imdb.com/title/tt1959490/?ref_=nm_flmg_act_7', 3, 2014, N'Noah')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (31, N'https://www.imdb.com/title/tt4287320/?ref_=nm_flmg_act_2', 3, 2017, N'The Circle')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (32, N'https://www.imdb.com/title/tt4005402/?ref_=nm_flmg_act_5', 3, 2015, N'The Colony')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (33, N'https://www.imdb.com/title/tt0420238/?ref_=nm_flmg_act_16', 3, 2008, N'The Tale of Despereaux ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (34, N'https://www.imdb.com/title/tt1245492/?ref_=nm_flmg_act_8', 3, 2013, N'This is the End')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (35, N'https://www.imdb.com/title/tt1800241/?ref_=nm_flmg_act_13', 4, 2013, N'American Hustle')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (36, N'https://www.imdb.com/title/tt0828393/?ref_=nm_flmg_act_26', 4, 2008, N'Garden Party')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (37, N'https://www.imdb.com/title/tt1582507/?ref_=nm_flmg_act_16', 4, 2012, N'House at the End of the Street')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (38, N'https://www.imdb.com/title/tt1758692/?ref_=nm_flmg_act_21', 4, 2011, N'Like Crazy')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (39, N'https://www.imdb.com/title/tt2873282/?ref_=nm_flmg_act_4', 4, 2018, N'Red Sparrow')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (40, N'https://www.imdb.com/title/tt1951264/?ref_=nm_flmg_act_14', 4, 2013, N'The Hunger Games Catching Fire')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (41, N'https://www.imdb.com/title/tt1951265/?ref_=nm_flmg_act_10', 4, 2014, N'The Hunger Games Mockingjay - Part 1')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (42, N'https://www.imdb.com/title/tt1951266/?ref_=nm_flmg_act_9', 4, 2015, N'The Hunger Games Mockingjay - Part 2')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (43, N'https://www.imdb.com/title/tt3385516/?ref_=nm_flmg_act_7', 4, 2015, N'X-Men Apocalypse ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (44, N'https://www.imdb.com/title/tt1877832/?ref_=nm_flmg_act_12', 4, 2014, N'X-Men Days of Future Past')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (45, N'https://www.imdb.com/title/tt1014759/?ref_=nm_flmg_act_38', 5, 2010, N'Alice in Wonderland ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (47, N'https://www.imdb.com/title/tt2567026/?ref_=nm_flmg_act_16', 5, 2016, N'Alice Through the Looking Glass')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (49, N'https://www.imdb.com/title/tt1077368/?ref_=nm_flmg_act_29', 5, 2012, N'Dark Shadows')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (50, N'https://www.imdb.com/title/tt4123430/?ref_=nm_flmg_act_6', 5, 2018, N'Fantastic Beasts The Crimes of Grindelwald')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (51, N'https://www.imdb.com/title/tt3045616/?ref_=nm_flmg_act_21', 5, 2015, N'Mortdecai')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (52, N'https://www.imdb.com/title/tt3402236/?ref_=nm_flmg_act_11', 5, 2017, N'Murder on the Orient Express')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (53, N'https://www.imdb.com/title/tt1790809/?ref_=nm_flmg_act_13', 5, 2017, N'Pirates of the Caribbean Dead Men Tell No Tales')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (54, N'https://www.imdb.com/title/tt1192628/?ref_=nm_flmg_act_36', 5, 2011, N'Rango')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (55, N'https://www.imdb.com/title/tt1210819/?ref_=nm_flmg_act_26', 5, 2013, N'The Lone Ranger')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (56, N'https://www.imdb.com/title/tt2209764/?ref_=nm_flmg_act_24', 5, 2014, N'Transcendence')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (58, N'https://www.imdb.com/title/tt0450259/?ref_=nm_flmg_act_16', 6, 2006, N'Blood Diamond')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (59, N'https://www.imdb.com/title/tt0758774/?ref_=nm_flmg_act_15', 6, 2008, N'Body of Lies')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (60, N'https://www.imdb.com/title/tt0264464/?ref_=nm_flmg_act_19', 6, 2002, N'Catch me if you can')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (61, N'https://www.imdb.com/title/tt1853728/?ref_=nm_flmg_act_9', 6, 2012, N'Django Unchained ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (62, N'https://www.imdb.com/title/tt1375666/?ref_=nm_flmg_act_12', 6, 2010, N'Inception')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (63, N'https://www.imdb.com/title/tt1375666/?ref_=nm_flmg_act_12', 6, 1996, N'Romeo + Juliet')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (66, N'https://www.imdb.com/title/tt1343092/?ref_=nm_flmg_act_8', 6, 2013, N'The Great Gatsby')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (67, N'https://www.imdb.com/title/tt1663202/?ref_=nm_flmg_act_5', 6, 2015, N'The Revenant')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (68, N'https://www.imdb.com/title/tt0993846/?ref_=nm_flmg_act_7', 6, 2013, N'The Wolf of Wall Street ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (69, N'https://www.imdb.com/title/tt0120338/?ref_=nm_flmg_act_25', 6, 1997, N'Titanic')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (79, N'https://www.imdb.com/title/tt0450392/?ref_=nm_flmg_act_48', 8, 2005, N'Batman Begins')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (80, N'https://www.imdb.com/title/tt0425210/?ref_=nm_flmg_act_44', 8, 2006, N'Lucky Number Slevin ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (82, N'https://www.imdb.com/title/tt0405159/?ref_=nm_flmg_act_54', 8, 2004, N'Million Dollar Baby ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (85, N'https://www.imdb.com/title/tt3181776/?ref_=nm_flmg_act_13', 8, 2015, N'Momentum')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (86, N'https://www.imdb.com/title/tt1670345/?ref_=nm_flmg_act_23', 8, 2013, N'Now You See Me')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (88, N'https://www.imdb.com/title/tt3110958/?ref_=nm_flmg_act_11', 8, 2016, N'Now You See Me 2')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (89, N'https://www.imdb.com/title/tt0825232/?ref_=nm_flmg_act_38', 8, 2007, N'The Bucket List')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (90, N'https://www.imdb.com/title/tt1345836/?ref_=nm_flmg_act_26', 8, 2012, N'The Dark Knight Rises')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (91, N'https://www.imdb.com/title/tt5523010/?ref_=nm_flmg_act_5', 8, 2018, N'The Nutcracker and the Four Realms')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (92, N'https://www.imdb.com/title/tt0111161/?ref_=nmbio_qu_51', 8, 1994, N'The Shawshank Redemption')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (93, N'https://www.imdb.com/title/tt0115639/?ref_=nm_flmg_act_59', 9, 1996, N'Beautiful Girls')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (94, N'https://www.imdb.com/title/tt0376541/?ref_=nm_flmg_act_48', 9, 2004, N'Closer')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (96, N'https://www.imdb.com/title/tt0446683/?ref_=nm_flmg_act_46', 9, 2005, N'Domino One')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (97, N'https://www.imdb.com/title/tt0116242/?ref_=nm_flmg_act_58', 9, 1996, N'Everyone Says I Love You')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (98, N'https://www.imdb.com/title/tt0441761/?ref_=nm_flmg_act_44', 9, 2005, N'FreeZone')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (99, N'https://www.imdb.com/title/tt0333766/?ref_=nm_flmg_act_50', 9, 2004, N'Garden State')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (100, N'https://www.imdb.com/title/tt0110413/?ref_=nm_flmg_act_62', 9, 1994, N'Leon The Professional')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (101, N'https://www.imdb.com/title/tt0121765/?ref_=nm_flmg_act_52', 9, 2002, N'Star Wars Episode II - Attack of the Clones')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (102, N'https://www.imdb.com/title/tt0800369/?ref_=nm_flmg_act_24', 9, 2011, N'Thor')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (103, N'https://www.imdb.com/title/tt0434409/?ref_=nm_flmg_act_43', 9, 2005, N'V For Vendetta')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (104, N'https://www.imdb.com/title/tt1860213/?ref_=nm_flmg_act_9', 10, 2016, N'Dirty Grandpa')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (105, N'https://www.imdb.com/title/tt0155711/?ref_=nm_flmg_act_59', 10, 1999, N'Flawless')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (106, N'https://www.imdb.com/title/tt1815708/?ref_=nm_flmg_act_23', 10, 2012, N'Freelancers')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (107, N'https://www.imdb.com/title/tt3276924/?ref_=nm_flmg_act_11', 10, 2015, N'Heist')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (108, N'https://www.imdb.com/title/tt0382077/?ref_=nm_flmg_act_46', 10, 2005, N'Hide and Seek')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (109, N'https://www.imdb.com/title/tt1480295/?ref_=nm_flmg_act_20', 10, 2013, N'Killing Season')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (111, N'https://www.imdb.com/title/tt1219289/?ref_=nm_flmg_act_31', 10, 2011, N'Limitless')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (112, N'https://www.imdb.com/title/tt0203019/?ref_=nm_flmg_act_57', 10, 2000, N'Men of Honor')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (113, N'https://www.imdb.com/title/tt1748179/?ref_=nm_flmg_act_25', 10, 2012, N'Red Lights')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (114, N'https://www.imdb.com/title/tt1034331/?ref_=nm_flmg_act_38', 10, 2008, N'Righteous Kill')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (115, N'https://www.imdb.com/title/tt0379306/?ref_=nm_flmg_act_46', 11, 2004, N'A Good Woman')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (117, N'https://www.imdb.com/title/tt2395427/?ref_=nm_flmg_act_15', 11, 2015, N'Avengers Age of Ultron')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (119, N'https://www.imdb.com/title/tt3498820/?ref_=nm_flmg_act_12', 11, 2016, N'Captain America Civil War')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (121, N'https://www.imdb.com/title/tt1843866/?ref_=nm_flmg_act_19', 11, 2014, N'Captain America The Winter Soldier ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (122, N'https://www.imdb.com/title/tt1219827/?ref_=nm_flmg_act_10', 11, 2017, N'Ghost in the Shell ')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (123, N'https://www.imdb.com/title/tt0162346/?ref_=nm_flmg_act_53', 11, 2001, N'Ghost World')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (124, N'https://www.imdb.com/title/tt1228705/?ref_=nm_flmg_act_28', 11, 2010, N'Iron Man 2')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (126, N'https://www.imdb.com/title/tt2872732/?ref_=nm_flmg_act_17', 11, 2014, N'Lucy')
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (127, N'https://www.imdb.com/title/tt4799050/?ref_=nm_flmg_act_9', 11, 2017, N'Rough Night')
GO
INSERT [dbo].[Movies] ([Id], [Link], [ActorId], [Year], [Name]) VALUES (128, N'https://www.imdb.com/title/tt0848228/?ref_=nm_flmg_act_26', 11, 2012, N'The Avengers')
SET IDENTITY_INSERT [dbo].[Movies] OFF
